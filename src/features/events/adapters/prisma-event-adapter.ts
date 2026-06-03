import type { EventRepository } from "../repositories/event-repository";
import type { PrismaClient } from "generated/prisma/client";

import { toEventRegistrationSnapshot, toEventSummary } from "./helper";

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
