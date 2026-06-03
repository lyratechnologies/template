import { z } from "zod";

export const NotificationOutcomeSchema = z.literal("WaitlistPromoted");

export type NotificationOutcome = z.infer<typeof NotificationOutcomeSchema>;

export const NotificationSchema = z.object({
  attendeeId: z.string().min(1),
  eventId: z.string().min(1),
  outcome: NotificationOutcomeSchema,
});

export type Notification = z.infer<typeof NotificationSchema>;
export const QueuedNotificationSchema = NotificationSchema.extend({
  id: z.string().min(1),
  status: z.literal("queued"),
  queuedAt: z.date(),
});

export type QueuedNotification = z.infer<typeof QueuedNotificationSchema>;

const queuedNotifications: QueuedNotification[] = [];

export async function queueWaitlistPromotionNotification(
  rawInput: Notification
) {
  const input = NotificationSchema.parse(rawInput);
  const notification = QueuedNotificationSchema.parse({
    id: crypto.randomUUID(),
    status: "queued",
    queuedAt: new Date(),
    ...input,
  });

  queuedNotifications.unshift(notification);

  return notification;
}

export async function listQueuedNotifications(rawInput: {
  attendeeId: string;
}) {
  const attendeeId = NotificationSchema.pick({ attendeeId: true }).parse(
    rawInput
  ).attendeeId;

  return queuedNotifications.filter(
    (notification) => notification.attendeeId === attendeeId
  );
}
