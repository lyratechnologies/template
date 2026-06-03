import type {
  EventRegistrationSnapshot,
  EventSummary,
} from "../domain/event";
import type {
  AttendeeEventParticipation,
  RegistrationSummary,
  WaitlistEntrySummary,
} from "../domain/registration";
import type { EventRepository } from "./event-repository";
import type { RegistrationRepository } from "./registration-repository";
import type { PrismaClient } from "generated/prisma/client";

import {
  getActiveWaitlistRank,
  getNextWaitlistSequencePosition,
} from "../domain/registration";

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

function toEventSummary(
  event: {
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
    registrations?: Array<{
      id: string;
      attendeeId: string;
      eventId: string;
    }>;
    waitlistEntries?: Array<{
      id: string;
      attendeeId: string;
      eventId: string;
      position: number;
    }>;
  },
  attendeeId?: string
): EventSummary {
  const attendeeParticipation = toAttendeeEventParticipation(event, attendeeId);

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
    ...(attendeeParticipation ? { attendeeParticipation } : {}),
  };
}

function toAttendeeEventParticipation(
  event: {
    registrations?: Array<{
      id: string;
      attendeeId: string;
      eventId: string;
    }>;
    waitlistEntries?: Array<{
      id: string;
      attendeeId: string;
      eventId: string;
      position: number;
    }>;
  },
  attendeeId?: string
): AttendeeEventParticipation | null {
  const registration = event.registrations?.[0];

  if (registration) {
    return {
      status: "registered",
      registration: toRegistrationSummary(registration),
    };
  }

  const waitlistEntry = event.waitlistEntries?.find(
    (activeWaitlistEntry) => activeWaitlistEntry.attendeeId === attendeeId
  );

  if (waitlistEntry) {
    const activeRank = getActiveWaitlistRank(
      waitlistEntry,
      event.waitlistEntries ?? []
    );

    return {
      status: "waitlisted",
      waitlistEntry: toWaitlistEntrySummary(
        waitlistEntry,
        activeRank ?? waitlistEntry.position
      ),
    };
  }

  return null;
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

function toWaitlistEntrySummary(
  waitlistEntry: {
    id: string;
    attendeeId: string;
    eventId: string;
    position: number;
  },
  position = waitlistEntry.position
): WaitlistEntrySummary {
  return {
    id: waitlistEntry.id,
    attendeeId: waitlistEntry.attendeeId,
    eventId: waitlistEntry.eventId,
    position,
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
                where: { status: "CONFIRMED", cancelledAt: null },
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
                where: { status: "CONFIRMED", cancelledAt: null },
              },
            },
          },
        },
      });

      return event ? toEventRegistrationSnapshot(event) : null;
    },
    async listOpenEvents(input) {
      const events = await db.event.findMany({
        orderBy: { startsAt: "asc" },
        include: {
          registrations: input?.attendeeId
            ? {
                where: {
                  attendeeId: input.attendeeId,
                  status: "CONFIRMED",
                  cancelledAt: null,
                },
                take: 1,
              }
            : false,
          waitlistEntries: input?.attendeeId
            ? {
                where: {
                  promotedAt: null,
                  cancelledAt: null,
                },
                orderBy: { position: "asc" },
              }
            : false,
          _count: {
            select: {
              registrations: {
                where: { status: "CONFIRMED", cancelledAt: null },
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

      return events.map((event) => toEventSummary(event, input?.attendeeId));
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
          cancelledAt: null,
        },
      });

      return registration ? toRegistrationSummary(registration) : null;
    },
    async findActiveWaitlistEntry(input) {
      const activeWaitlistEntries = await db.waitlistEntry.findMany({
        where: {
          eventId: input.eventId,
          promotedAt: null,
          cancelledAt: null,
        },
        orderBy: { position: "asc" },
      });
      const waitlistEntry = activeWaitlistEntries.find(
        (activeWaitlistEntry) =>
          activeWaitlistEntry.attendeeId === input.attendeeId
      );

      if (!waitlistEntry) {
        return null;
      }
      const activeRank = getActiveWaitlistRank(
        waitlistEntry,
        activeWaitlistEntries
      );

      return toWaitlistEntrySummary(
        waitlistEntry,
        activeRank ?? waitlistEntry.position
      );
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
      const activeWaitlistEntries = await db.waitlistEntry.findMany({
        where: {
          eventId: input.eventId,
          promotedAt: null,
          cancelledAt: null,
        },
        select: {
          position: true,
        },
      });

      const waitlistEntry = await db.waitlistEntry.create({
        data: {
          attendeeId: input.attendeeId,
          eventId: input.eventId,
          position: getNextWaitlistSequencePosition([
            ...activeWaitlistEntries,
            { position: latestWaitlistPosition._max.position ?? 0 },
          ]),
        },
      });

      return toWaitlistEntrySummary(
        waitlistEntry,
        activeWaitlistEntries.length + 1
      );
    },
    async cancelRegistration(input) {
      const registration = await db.registration.update({
        where: { id: input.registrationId },
        data: {
          status: "CANCELLED",
          cancelledAt: input.cancelledAt,
        },
      });

      return toRegistrationSummary(registration);
    },
    async cancelWaitlistEntry(input) {
      const waitlistEntry = await db.waitlistEntry.update({
        where: { id: input.waitlistEntryId },
        data: {
          cancelledAt: input.cancelledAt,
        },
      });

      return toWaitlistEntrySummary(waitlistEntry);
    },
    async promoteNextWaitlistEntry(input) {
      return db.$transaction(async (tx) => {
        const waitlistEntry = await tx.waitlistEntry.findFirst({
          where: {
            eventId: input.eventId,
            promotedAt: null,
            cancelledAt: null,
          },
          orderBy: { position: "asc" },
        });

        if (waitlistEntry === null) {
          return null;
        }

        const promotedWaitlistEntry = await tx.waitlistEntry.update({
          where: { id: waitlistEntry.id },
          data: {
            promotedAt: input.promotedAt,
          },
        });
        const registration = await tx.registration.create({
          data: {
            attendeeId: waitlistEntry.attendeeId,
            eventId: waitlistEntry.eventId,
            status: "CONFIRMED",
          },
        });

        return {
          registration: toRegistrationSummary(registration),
          waitlistEntry: toWaitlistEntrySummary(promotedWaitlistEntry),
        };
      });
    },
  };
}
