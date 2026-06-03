import { sendRegistrationNotification } from "~/features/notifications";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import {
  createEvent,
  CreateEventInputSchema,
  registerForEvent,
  RegisterForEventInputSchema,
} from "..";
import {
  createPrismaEventRepository,
  createPrismaRegistrationRepository,
} from "../repositories/prisma-events-repositories";

export const eventsRouter = createTRPCRouter({
  create: protectedProcedure
    .input(CreateEventInputSchema)
    .mutation(async ({ ctx, input }) => {
      return createEvent(input, {
        events: createPrismaEventRepository(ctx.db),
      });
    }),

  list: publicProcedure.query(async ({ ctx }) => {
    return createPrismaEventRepository(ctx.db).listOpenEvents();
  }),

  registerForEvent: protectedProcedure
    .input(RegisterForEventInputSchema.pick({ eventId: true }))
    .mutation(async ({ ctx, input }) => {
      const result = await registerForEvent(
        {
          attendeeId: ctx.session.user.id,
          eventId: input.eventId,
          requestedAt: new Date(),
        },
        {
          events: createPrismaEventRepository(ctx.db),
          registrations: createPrismaRegistrationRepository(ctx.db),
        }
      );

      await Promise.allSettled(
        result.events.map((event) =>
          sendRegistrationNotification({
            attendeeId: event.attendeeId,
            eventId: event.eventId,
            outcome: event.type,
          })
        )
      );

      return result;
    }),
});
