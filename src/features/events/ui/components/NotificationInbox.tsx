import type { RouterOutputs } from "~/trpc/react";
import { Bell } from "lucide-react";

type QueuedNotification = RouterOutputs["notifications"]["list"][number];

type NotificationInboxProps = {
  notifications: QueuedNotification[];
};

export function NotificationInbox({ notifications }: NotificationInboxProps) {
  if (notifications.length === 0) {
    return (
      <div className="rounded-md border border-dashed border-[oklch(0.72_0.018_95)] px-4 py-3 text-sm text-[oklch(0.42_0.018_95)]">
        No queued notifications yet.
      </div>
    );
  }

  return (
    <section className="rounded-md border border-[oklch(0.82_0.018_95)] bg-[oklch(0.998_0.004_95)] p-4">
      <div className="mb-3 flex items-center gap-2">
        <Bell
          className="size-4 text-[oklch(0.43_0.075_165)]"
          aria-hidden="true"
        />
        <h3 className="text-sm font-semibold">Notification inbox</h3>
      </div>
      <ul className="grid gap-2">
        {notifications.slice(0, 5).map((notification) => (
          <li
            className="rounded-md bg-[oklch(0.96_0.025_165)] px-3 py-2 text-sm text-[oklch(0.32_0.08_165)]"
            key={notification.id}
          >
            <span className="font-medium">
              {formatNotificationOutcome(notification.outcome)}
            </span>
            <span className="block text-xs text-[oklch(0.38_0.018_95)]">
              Event {notification.eventId} -{" "}
              {new Intl.DateTimeFormat(undefined, {
                dateStyle: "medium",
                timeStyle: "short",
              }).format(notification.queuedAt)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function formatNotificationOutcome(outcome: "WaitlistPromoted") {
  switch (outcome) {
    case "WaitlistPromoted":
      return "You were promoted from the waitlist";
  }
}
