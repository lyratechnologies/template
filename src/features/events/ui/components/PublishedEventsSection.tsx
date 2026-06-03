import type { RouterOutputs } from "~/trpc/react";

import { EventCard } from "./EventCard";
import { NotificationInbox } from "./NotificationInbox";
import { StatusPanel } from "./StatusPanel";

type EventSummary = RouterOutputs["events"]["list"][number];
type QueuedNotification = RouterOutputs["notifications"]["list"][number];

type PublishedEventsSectionProps = {
  events: EventSummary[];
  isActionPending: boolean;
  isError: boolean;
  isLoading: boolean;
  isSignedIn: boolean;
  notifications: QueuedNotification[];
  onCancelRegistration: (eventId: string) => void;
  onLeaveWaitlist: (eventId: string) => void;
  onRegister: (eventId: string) => void;
};

export function PublishedEventsSection({
  events,
  isActionPending,
  isError,
  isLoading,
  isSignedIn,
  notifications,
  onCancelRegistration,
  onLeaveWaitlist,
  onRegister,
}: PublishedEventsSectionProps) {
  return (
    <section className="flex min-w-0 flex-col gap-4">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">Published events</h2>
          <p className="text-sm text-[oklch(0.42_0.018_95)]">
            Register for available events or join the waitlist when capacity is
            full.
          </p>
        </div>
        <span className="text-sm font-medium text-[oklch(0.43_0.075_165)]">
          {events.length} {events.length === 1 ? "event" : "events"}
        </span>
      </div>

      {isSignedIn && <NotificationInbox notifications={notifications} />}

      {isLoading ? (
        <StatusPanel label="Loading events" />
      ) : isError ? (
        <StatusPanel label="Events could not be loaded." tone="error" />
      ) : events.length === 0 ? (
        <StatusPanel
          label={
            isSignedIn
              ? "Create an event to test registration and waitlist outcomes."
              : "Sign in to create the first event."
          }
        />
      ) : (
        <div className="flex flex-col gap-3">
          {events.map((event) => (
            <EventCard
              event={event}
              isActionPending={isActionPending}
              isSignedIn={isSignedIn}
              key={event.id}
              onCancelRegistration={onCancelRegistration}
              onLeaveWaitlist={onLeaveWaitlist}
              onRegister={onRegister}
            />
          ))}
        </div>
      )}
    </section>
  );
}
