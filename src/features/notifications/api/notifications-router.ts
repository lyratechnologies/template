import { listQueuedNotifications } from "~/features/notifications";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const notificationsRouter = createTRPCRouter({
  list: protectedProcedure.query(async ({ ctx }) => {
    return listQueuedNotifications({
      attendeeId: ctx.session.user.id,
    });
  }),
});
