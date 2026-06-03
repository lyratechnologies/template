import type {
  EventRegistrationSnapshot,
  EventRepository,
  EventSummary,
  RegistrationRepository,
  RegistrationSummary,
  WaitlistEntrySummary,
} from "~/features/events";
import type { PrismaClient } from "generated/prisma/client";

function toEventRegistrationSnapshot(event: {
  id: string;
  capacity: number;
  registrationOpensAt: Date;
  registrationClosesAt: Date;
  _count: {
    registrations: number;
  };
}): EventRegistrationSnapshot {
  return {
    id: event.id,
    capacity: event.capacity,
    registrationWindow: {
      opensAt: event.registrationOpensAt,
      closesAt: event.registrationClosesAt,
    },
    confirmedRegistrationCount: event._count.registrations,
  };
}

function toEventSummary(event: {
  id: string;
  title: string;
  description: string;
  startsAt: Date;
  capacity: number;
  registrationOpensAt: Date;
  registrationClosesAt: Date;
  _count: {
    registrations: number;
    waitlistEntries: number;
  };
}): EventSummary {
  return {
    id: event.id,
    title: event.title,
    description: event.description,
    startsAt: event.startsAt,
    capacity: event.capacity,
    registrationWindow: {
      opensAt: event.registrationOpensAt,
      closesAt: event.registrationClosesAt,
    },
    confirmedRegistrationCount: event._count.registrations,
    waitlistEntryCount: event._count.waitlistEntries,
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

export function createPrismaEventRepository(db: PrismaClient): EventRepository {
  return {
    async createEvent(input) {
      const event = await db.event.create({
        data: {
          title: input.title,
          description: input.description,
          startsAt: input.startsAt,
          capacity: input.capacity,
          registrationOpensAt: input.registrationOpensAt,
          registrationClosesAt: input.registrationClosesAt,
        },
        include: {
          _count: {
            select: {
              registrations: {
                where: { status: "CONFIRMED" },
              },
              waitlistEntries: {
                where: {
                  promotedAt: null,
                  cancelledAt: null,
                },
              },
            },
          },
        },
      });

      return toEventSummary(event);
    },
    async findRegistrationSnapshot(eventId) {
      const event = await db.event.findUnique({
        where: { id: eventId },
        include: {
          _count: {
            select: {
              registrations: {
                where: { status: "CONFIRMED" },
              },
            },
          },
        },
      });

      return event ? toEventRegistrationSnapshot(event) : null;
    },
    async listOpenEvents() {
      const events = await db.event.findMany({
        orderBy: { startsAt: "asc" },
        include: {
          _count: {
            select: {
              registrations: {
                where: { status: "CONFIRMED" },
              },
              waitlistEntries: {
                where: {
                  promotedAt: null,
                  cancelledAt: null,
                },
              },
            },
          },
        },
      });

      return events.map(toEventSummary);
    },
  };
}

export function createPrismaRegistrationRepository(
  db: PrismaClient
): RegistrationRepository {
  return {
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
