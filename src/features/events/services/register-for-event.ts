import type { EventRepository } from "../repositories/event-repository";
import type { RegistrationRepository } from "../repositories/registration-repository";
import { z } from "zod";

import {
  EventRegistrationEventSchema,
  EventRegistrationSnapshotSchema,
  isRegistrationOpen,
} from "../domain/event";
import {
  RegistrationSummarySchema,
  WaitlistEntrySummarySchema,
} from "../domain/registration";

export const RegisterForEventInputSchema = z.object({
  attendeeId: z.string().min(1),
  eventId: z.string().min(1),
  requestedAt: z.date(),
});

export type RegisterForEventInput = z.infer<typeof RegisterForEventInputSchema>;

export const RegisterForEventRejectionReasonSchema = z.enum([
  "registration_closed",
  "already_registered",
]);

export type RegisterForEventRejectionReason = z.infer<
  typeof RegisterForEventRejectionReasonSchema
>;

export const RegisterForEventOutputSchema = z.discriminatedUnion("status", [
  z.object({
    status: z.literal("registered"),
    registration: RegistrationSummarySchema,
    events: z.array(EventRegistrationEventSchema),
  }),
  z.object({
    status: z.literal("waitlisted"),
    waitlistEntry: WaitlistEntrySummarySchema,
    events: z.array(EventRegistrationEventSchema),
  }),
  z.object({
    status: z.literal("rejected"),
    reason: RegisterForEventRejectionReasonSchema,
    events: z.array(EventRegistrationEventSchema),
  }),
]);

export type RegisterForEventOutput = z.infer<
  typeof RegisterForEventOutputSchema
>;

export type RegisterForEventRepositories = {
  events: Pick<EventRepository, "findRegistrationSnapshot">;
  registrations: Pick<
    RegistrationRepository,
    | "findActiveRegistration"
    | "createConfirmedRegistration"
    | "createWaitlistEntry"
  >;
};

export async function registerForEvent(
  rawInput: RegisterForEventInput,
  repositories: RegisterForEventRepositories
): Promise<RegisterForEventOutput> {
  const input = RegisterForEventInputSchema.parse(rawInput);
  const event = EventRegistrationSnapshotSchema.nullable().parse(
    await repositories.events.findRegistrationSnapshot(input.eventId)
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
    await repositories.registrations.findActiveRegistration({
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
    const waitlistEntry = await repositories.registrations.createWaitlistEntry({
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
    await repositories.registrations.createConfirmedRegistration({
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
