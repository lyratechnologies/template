"use client";

import { CreateEventForm } from "./components/CreateEventForm";
import { PublishedEventsSection } from "./components/PublishedEventsSection";
import { useEventsActions } from "./hooks/use-events-actions";

type EventsViewProps = {
  isSignedIn: boolean;
};

export function EventsView({ isSignedIn }: EventsViewProps) {
  const actions = useEventsActions({ isSignedIn });

  return (
    <div
      className={
        isSignedIn
          ? "grid gap-6 lg:grid-cols-[minmax(20rem,24rem)_1fr] lg:items-start"
          : "grid gap-6"
      }
    >
      {isSignedIn && (
        <CreateEventForm
          isPending={actions.isCreateEventPending}
          onSubmit={actions.createEvent}
        />
      )}

      <PublishedEventsSection
        events={actions.events}
        isActionPending={actions.isEventActionPending}
        isError={actions.isEventsError}
        isLoading={actions.isEventsLoading}
        isSignedIn={isSignedIn}
        notifications={actions.notifications}
        onCancelRegistration={actions.cancelRegistration}
        onLeaveWaitlist={actions.leaveWaitlist}
        onRegister={actions.registerForEvent}
      />
    </div>
  );
}
