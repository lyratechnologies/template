import type { EventRegistrationEvent } from "..";

import { queueWaitlistPromotionNotification } from "~/features/notifications";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import {
  cancelRegistration,
  CancelRegistrationInputSchema,
  createEvent,
  CreateEventInputSchema,
  leaveWaitlist,
  LeaveWaitlistInputSchema,
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
    return createPrismaEventRepository(ctx.db).listOpenEvents({
      attendeeId: ctx.session?.user.id,
    });
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

      const notifications = await dispatchNotifications(result.events);

      return { ...result, notifications };
    }),

  cancelRegistration: protectedProcedure
    .input(CancelRegistrationInputSchema.pick({ eventId: true }))
    .mutation(async ({ ctx, input }) => {
      const result = await cancelRegistration(
        {
          attendeeId: ctx.session.user.id,
          eventId: input.eventId,
          requestedAt: new Date(),
        },
        {
          registrations: createPrismaRegistrationRepository(ctx.db),
        }
      );

      const notifications = await dispatchNotifications(result.events);

      return { ...result, notifications };
    }),

  leaveWaitlist: protectedProcedure
    .input(LeaveWaitlistInputSchema.pick({ eventId: true }))
    .mutation(async ({ ctx, input }) => {
      const result = await leaveWaitlist(
        {
          attendeeId: ctx.session.user.id,
          eventId: input.eventId,
          requestedAt: new Date(),
        },
        {
          registrations: createPrismaRegistrationRepository(ctx.db),
        }
      );

      const notifications = await dispatchNotifications(result.events);

      return { ...result, notifications };
    }),
});

async function dispatchNotifications(events: EventRegistrationEvent[]) {
  const notificationEvents = events.filter(
    (event) => event.type === "WaitlistPromoted"
  );
  const results = await Promise.allSettled(
    notificationEvents.map((event) =>
      queueWaitlistPromotionNotification({
        attendeeId: event.attendeeId,
        eventId: event.eventId,
        outcome: event.type,
      })
    )
  );

  return results.flatMap((result) =>
    result.status === "fulfilled" ? [result.value] : []
  );
}
