import type { EventRepository } from "../../repositories/event";
import type { RegistrationRepository } from "../../repositories/registration";
import type {
  CancelRegistrationInput,
  CancelRegistrationOutput,
  CancelRegistrationUseCase,
  LeaveWaitlistInput,
  LeaveWaitlistOutput,
  LeaveWaitlistUseCase,
  RegisterForEventInput,
  RegisterForEventOutput,
  RegisterForEventUseCase,
} from "./commands";

import {
  EventRegistrationSnapshotSchema,
  isRegistrationOpen,
} from "../../domain/event";
import {
  CancelRegistrationInputSchema,
  CancelRegistrationOutputSchema,
  LeaveWaitlistInputSchema,
  LeaveWaitlistOutputSchema,
  RegisterForEventInputSchema,
  RegisterForEventOutputSchema,
} from "./commands";

export type RegistrationServiceRepositories = {
  events: Pick<EventRepository, "findRegistrationSnapshot">;
  registrations: Pick<
    RegistrationRepository,
    | "findActiveRegistration"
    | "findActiveWaitlistEntry"
    | "createConfirmedRegistration"
    | "createWaitlistEntry"
    | "cancelRegistration"
    | "cancelWaitlistEntry"
    | "promoteNextWaitlistEntry"
  >;
};

export class RegistrationService
  implements
    RegisterForEventUseCase,
    CancelRegistrationUseCase,
    LeaveWaitlistUseCase
{
  constructor(private readonly repositories: RegistrationServiceRepositories) {}

  async registerForEvent(
    rawInput: RegisterForEventInput
  ): Promise<RegisterForEventOutput> {
    const input = RegisterForEventInputSchema.parse(rawInput);
    const event = EventRegistrationSnapshotSchema.nullable().parse(
      await this.repositories.events.findRegistrationSnapshot(input.eventId)
    );

    if (event === null) {
      throw new Error("Event not found");
    }

    if (!isRegistrationOpen(event.registrationWindow, input.requestedAt)) {
      return {
        status: "rejected",
        reason: "registration_closed",
        events: [],
      };
    }

    const activeRegistration =
      await this.repositories.registrations.findActiveRegistration({
        attendeeId: input.attendeeId,
        eventId: input.eventId,
      });

    if (activeRegistration !== null) {
      return {
        status: "rejected",
        reason: "already_registered",
        events: [],
      };
    }

    if (event.confirmedRegistrationCount >= event.capacity) {
      const waitlistEntry =
        await this.repositories.registrations.createWaitlistEntry({
          attendeeId: input.attendeeId,
          eventId: input.eventId,
        });

      return RegisterForEventOutputSchema.parse({
        status: "waitlisted",
        waitlistEntry,
        events: [
          {
            type: "WaitlistJoined",
            waitlistEntryId: waitlistEntry.id,
            attendeeId: waitlistEntry.attendeeId,
            eventId: waitlistEntry.eventId,
          },
        ],
      });
    }

    const registration =
      await this.repositories.registrations.createConfirmedRegistration({
        attendeeId: input.attendeeId,
        eventId: input.eventId,
      });

    return RegisterForEventOutputSchema.parse({
      status: "registered",
      registration,
      events: [
        {
          type: "RegistrationConfirmed",
          registrationId: registration.id,
          attendeeId: registration.attendeeId,
          eventId: registration.eventId,
        },
      ],
    });
  }

  async cancelRegistration(
    rawInput: CancelRegistrationInput
  ): Promise<CancelRegistrationOutput> {
    const input = CancelRegistrationInputSchema.parse(rawInput);
    const activeRegistration =
      await this.repositories.registrations.findActiveRegistration({
        attendeeId: input.attendeeId,
        eventId: input.eventId,
      });

    if (activeRegistration === null) {
      return {
        status: "rejected",
        reason: "not_registered",
        events: [],
      };
    }

    const registration =
      await this.repositories.registrations.cancelRegistration({
        registrationId: activeRegistration.id,
        cancelledAt: input.requestedAt,
      });
    const promotedWaitlistEntry =
      await this.repositories.registrations.promoteNextWaitlistEntry({
        eventId: input.eventId,
        promotedAt: input.requestedAt,
      });

    return CancelRegistrationOutputSchema.parse({
      status: "cancelled",
      registration,
      events: [
        {
          type: "RegistrationCancelled",
          registrationId: registration.id,
          attendeeId: registration.attendeeId,
          eventId: registration.eventId,
        },
        ...(promotedWaitlistEntry
          ? [
              {
                type: "WaitlistPromoted",
                registrationId: promotedWaitlistEntry.registration.id,
                waitlistEntryId: promotedWaitlistEntry.waitlistEntry.id,
                attendeeId: promotedWaitlistEntry.registration.attendeeId,
                eventId: promotedWaitlistEntry.registration.eventId,
              },
            ]
          : []),
      ],
    });
  }

  async leaveWaitlist(
    rawInput: LeaveWaitlistInput
  ): Promise<LeaveWaitlistOutput> {
    const input = LeaveWaitlistInputSchema.parse(rawInput);
    const activeWaitlistEntry =
      await this.repositories.registrations.findActiveWaitlistEntry({
        attendeeId: input.attendeeId,
        eventId: input.eventId,
      });

    if (activeWaitlistEntry === null) {
      return {
        status: "rejected",
        reason: "not_waitlisted",
        events: [],
      };
    }

    const waitlistEntry =
      await this.repositories.registrations.cancelWaitlistEntry({
        waitlistEntryId: activeWaitlistEntry.id,
        cancelledAt: input.requestedAt,
      });

    return LeaveWaitlistOutputSchema.parse({
      status: "left_waitlist",
      waitlistEntry,
      events: [
        {
          type: "WaitlistLeft",
          waitlistEntryId: waitlistEntry.id,
          attendeeId: waitlistEntry.attendeeId,
          eventId: waitlistEntry.eventId,
        },
      ],
    });
  }
}
