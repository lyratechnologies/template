import { createEvent, CreateEventInputSchema, EventSummarySchema } from "../..";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const eventsRouter = createTRPCRouter({
  create: protectedProcedure
    .input(CreateEventInputSchema)
    .mutation(async ({ ctx, input }) => {
      return createEvent(input, {
        createEvent: async (eventInput) => {
          const event = await ctx.db.event.create({
            data: {
              title: eventInput.title,
              description: eventInput.description,
              startsAt: eventInput.startsAt,
              capacity: eventInput.capacity,
              registrationOpensAt: eventInput.registrationOpensAt,
              registrationClosesAt: eventInput.registrationClosesAt,
            },
          });

          return EventSummarySchema.parse({
            id: event.id,
            title: event.title,
            description: event.description,
            startsAt: event.startsAt,
            capacity: event.capacity,
            registrationWindow: {
              opensAt: event.registrationOpensAt,
              closesAt: event.registrationClosesAt,
            },
            confirmedRegistrationCount: 0,
            waitlistEntryCount: 0,
          });
        },
      });
    }),

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
