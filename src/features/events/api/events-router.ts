import type { EventRegistrationEvent } from "../domain/event";

import { queueWaitlistPromotionNotification } from "~/features/notifications";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import { createPrismaEventRepository } from "../repositories/event/adapters/prisma";
import { createPrismaRegistrationRepository } from "../repositories/registration/adapters/prisma";
import { CreateEventInputSchema, EventService } from "../services/event";
import {
  CancelRegistrationInputSchema,
  LeaveWaitlistInputSchema,
  RegisterForEventInputSchema,
  RegistrationService,
} from "../services/registration";

export const eventsRouter = createTRPCRouter({
  create: protectedProcedure
    .input(CreateEventInputSchema)
    .mutation(async ({ ctx, input }) => {
      const service = new EventService({
        events: createPrismaEventRepository(ctx.db),
      });

      return service.createEvent(input);
    }),

  list: publicProcedure.query(async ({ ctx }) => {
    return createPrismaEventRepository(ctx.db).listOpenEvents({
      attendeeId: ctx.session?.user.id,
    });
  }),

  registerForEvent: protectedProcedure
    .input(RegisterForEventInputSchema.pick({ eventId: true }))
    .mutation(async ({ ctx, input }) => {
      const service = new RegistrationService({
        events: createPrismaEventRepository(ctx.db),
        registrations: createPrismaRegistrationRepository(ctx.db),
      });
      const result = await service.registerForEvent({
        attendeeId: ctx.session.user.id,
        eventId: input.eventId,
        requestedAt: new Date(),
      });

      const notifications = await dispatchNotifications(result.events);

      return { ...result, notifications };
    }),

  cancelRegistration: protectedProcedure
    .input(CancelRegistrationInputSchema.pick({ eventId: true }))
    .mutation(async ({ ctx, input }) => {
      const service = new RegistrationService({
        events: createPrismaEventRepository(ctx.db),
        registrations: createPrismaRegistrationRepository(ctx.db),
      });
      const result = await service.cancelRegistration({
        attendeeId: ctx.session.user.id,
        eventId: input.eventId,
        requestedAt: new Date(),
      });

      const notifications = await dispatchNotifications(result.events);

      return { ...result, notifications };
    }),

  leaveWaitlist: protectedProcedure
    .input(LeaveWaitlistInputSchema.pick({ eventId: true }))
    .mutation(async ({ ctx, input }) => {
      const service = new RegistrationService({
        events: createPrismaEventRepository(ctx.db),
        registrations: createPrismaRegistrationRepository(ctx.db),
      });
      const result = await service.leaveWaitlist({
        attendeeId: ctx.session.user.id,
        eventId: input.eventId,
        requestedAt: new Date(),
      });

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
