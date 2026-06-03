import type { Notification } from "../domain/notification";

import { NotificationSchema } from "../domain/notification";

export type SendRegistrationNotificationInput = Notification;

export async function sendRegistrationNotification(
  rawInput: SendRegistrationNotificationInput
) {
  NotificationSchema.parse(rawInput);

  return {
    status: "queued" as const,
  };
}
