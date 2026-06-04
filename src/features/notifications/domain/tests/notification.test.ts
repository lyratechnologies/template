import { describe, expect, it } from "vitest";

import {
  listQueuedNotifications,
  queueWaitlistPromotionNotification,
} from "../notification";

describe("queued notifications", () => {
  it("queues and lists waitlist promotion notifications for an attendee", async () => {
    const notification = await queueWaitlistPromotionNotification({
      attendeeId: "attendee_1",
      eventId: "event_1",
      outcome: "WaitlistPromoted",
    });

    const notifications = await listQueuedNotifications({
      attendeeId: "attendee_1",
    });

    expect(notifications).toContainEqual(notification);
  });
});
