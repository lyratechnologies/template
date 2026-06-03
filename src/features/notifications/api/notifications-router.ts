import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

import { listQueuedNotifications } from "../domain/notification";

export const notificationsRouter = createTRPCRouter({
  list: protectedProcedure.query(async ({ ctx }) => {
    return listQueuedNotifications({
      attendeeId: ctx.session.user.id,
    });
  }),
});
