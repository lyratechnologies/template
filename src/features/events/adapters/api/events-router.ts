import { EventSummarySchema } from "../..";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const eventsRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    const events = await ctx.db.event.findMany({
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

    return events.map((event) =>
      EventSummarySchema.parse({
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
      }),
    );
  }),
});
