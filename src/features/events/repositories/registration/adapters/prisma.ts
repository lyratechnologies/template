import type { RegistrationRepository } from "../repository";
import type { PrismaClient } from "generated/prisma/client";

import {
  getActiveWaitlistRank,
  getNextWaitlistSequencePosition,
} from "../../../domain/registration";
import { toRegistrationSummary, toWaitlistEntrySummary } from "./prisma-mappers";

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
