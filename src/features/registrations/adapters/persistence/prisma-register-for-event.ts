import type { PrismaClient } from "generated/prisma/client";

import type { Event } from "~/features/events";
import type {
  RegisterForEventPorts,
  RegistrationSummary,
  WaitlistEntrySummary,
} from "~/features/registrations";

function toEvent(event: {
  id: string;
  capacity: number;
  registrationOpensAt: Date;
  registrationClosesAt: Date;
}): Event {
  return {
    id: event.id,
    capacity: event.capacity,
    registrationWindow: {
      opensAt: event.registrationOpensAt,
      closesAt: event.registrationClosesAt,
    },
  };
}

function toRegistrationSummary(registration: {
  id: string;
  attendeeId: string;
  eventId: string;
}): RegistrationSummary {
  return {
    id: registration.id,
    attendeeId: registration.attendeeId,
    eventId: registration.eventId,
    status: "confirmed",
  };
}

function toWaitlistEntrySummary(waitlistEntry: {
  id: string;
  attendeeId: string;
  eventId: string;
  position: number;
}): WaitlistEntrySummary {
  return {
    id: waitlistEntry.id,
    attendeeId: waitlistEntry.attendeeId,
    eventId: waitlistEntry.eventId,
    position: waitlistEntry.position,
  };
}

export function createPrismaRegisterForEventPorts(
  db: PrismaClient,
): RegisterForEventPorts {
  return {
    async findEventById(eventId) {
      const event = await db.event.findUnique({
        where: { id: eventId },
      });

      return event ? toEvent(event) : null;
    },
    async findActiveRegistration(input) {
      const registration = await db.registration.findFirst({
        where: {
          attendeeId: input.attendeeId,
          eventId: input.eventId,
          status: "CONFIRMED",
        },
      });

      return registration ? toRegistrationSummary(registration) : null;
    },
    async countConfirmedRegistrations(eventId) {
      return db.registration.count({
        where: {
          eventId,
          status: "CONFIRMED",
        },
      });
    },
    async createConfirmedRegistration(input) {
      const registration = await db.registration.create({
        data: {
          attendeeId: input.attendeeId,
          eventId: input.eventId,
          status: "CONFIRMED",
        },
      });

      return toRegistrationSummary(registration);
    },
    async createWaitlistEntry(input) {
      const latestWaitlistPosition = await db.waitlistEntry.aggregate({
        where: {
          eventId: input.eventId,
        },
        _max: {
          position: true,
        },
      });

      const waitlistEntry = await db.waitlistEntry.create({
        data: {
          attendeeId: input.attendeeId,
          eventId: input.eventId,
          position: (latestWaitlistPosition._max.position ?? 0) + 1,
        },
      });

      return toWaitlistEntrySummary(waitlistEntry);
    },
  };
}
