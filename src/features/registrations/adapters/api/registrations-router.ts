import { registerForEvent, RegisterForEventInputSchema } from "../..";
import { createPrismaRegisterForEventPorts } from "../persistence/prisma-register-for-event";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const registrationsRouter = createTRPCRouter({
  registerForEvent: protectedProcedure
    .input(RegisterForEventInputSchema.pick({ eventId: true }))
    .mutation(async ({ ctx, input }) => {
      return registerForEvent(
        {
          attendeeId: ctx.session.user.id,
          eventId: input.eventId,
          requestedAt: new Date(),
        },
        createPrismaRegisterForEventPorts(ctx.db),
      );
    }),
});
