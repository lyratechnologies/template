"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { useTRPC } from "~/trpc/react";

type EventsViewProps = {
  isSignedIn: boolean;
};

export function EventsView({ isSignedIn }: EventsViewProps) {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const eventsQuery = useQuery(trpc.events.list.queryOptions());
  const registerMutation = useMutation(
    trpc.registrations.registerForEvent.mutationOptions({
      onSuccess: async (result) => {
        await queryClient.invalidateQueries({
          queryKey: trpc.events.list.queryKey(),
        });

        if (result.status === "registered") {
          toast.success("Registration confirmed");
          return;
        }

        if (result.status === "waitlisted") {
          toast.info(
            `Added to waitlist at position ${result.waitlistEntry.position}`,
          );
          return;
        }

        toast.warning(
          result.reason === "already_registered"
            ? "You already have an active registration for this event"
            : "Registration is closed for this event",
        );
      },
      onError: () => {
        toast.error("Registration failed");
      },
    }),
  );

  if (eventsQuery.isLoading) {
    return <p className="text-sm text-[oklch(0.38_0.018_95)]">Loading events</p>;
  }

  if (eventsQuery.isError) {
    return (
      <p className="border border-[oklch(0.7_0.12_25)] bg-[oklch(0.96_0.035_25)] p-4 text-sm text-[oklch(0.34_0.12_25)]">
        Events could not be loaded.
      </p>
    );
  }

  const events = eventsQuery.data ?? [];

  if (events.length === 0) {
    return (
      <section className="border border-dashed border-[oklch(0.72_0.018_95)] p-8">
        <h2 className="text-xl font-semibold">No events published</h2>
        <p className="mt-2 max-w-[60ch] text-sm leading-6 text-[oklch(0.38_0.018_95)]">
          Add events in the database to see registration and waitlist outcomes
          flow through the vertical slices.
        </p>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-4">
      {events.map((event) => {
        const startsAt = new Intl.DateTimeFormat(undefined, {
          dateStyle: "medium",
          timeStyle: "short",
        }).format(event.startsAt);
        const capacityRemaining = Math.max(
          event.capacity - event.confirmedRegistrationCount,
          0,
        );
        const isFull = capacityRemaining === 0;

        return (
          <article
            className="grid gap-5 border border-[oklch(0.82_0.018_95)] bg-[oklch(0.998_0.004_95)] p-5 sm:grid-cols-[1fr_auto] sm:items-center"
            key={event.id}
          >
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2 text-sm">
                <span className="font-medium text-[oklch(0.43_0.075_165)]">
                  {startsAt}
                </span>
                <span className="text-[oklch(0.55_0.018_95)]">
                  {isFull ? "Waitlist available" : `${capacityRemaining} open`}
                </span>
              </div>
              <h2 className="text-2xl font-semibold">{event.title}</h2>
              <p className="mt-2 max-w-[70ch] text-sm leading-6 text-[oklch(0.38_0.018_95)]">
                {event.description}
              </p>
              <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[oklch(0.38_0.018_95)]">
                <div>
                  <dt className="inline font-medium text-[oklch(0.22_0.018_95)]">
                    Confirmed:
                  </dt>{" "}
                  <dd className="inline">
                    {event.confirmedRegistrationCount} / {event.capacity}
                  </dd>
                </div>
                <div>
                  <dt className="inline font-medium text-[oklch(0.22_0.018_95)]">
                    Waitlist:
                  </dt>{" "}
                  <dd className="inline">{event.waitlistEntryCount}</dd>
                </div>
              </dl>
            </div>

            <button
              className="h-11 min-w-36 bg-[oklch(0.24_0.025_95)] px-5 text-sm font-medium text-[oklch(0.98_0.006_95)] transition-colors hover:bg-[oklch(0.34_0.075_165)] disabled:cursor-not-allowed disabled:bg-[oklch(0.75_0.01_95)]"
              disabled={!isSignedIn || registerMutation.isPending}
              onClick={() =>
                registerMutation.mutate({
                  eventId: event.id,
                })
              }
              type="button"
            >
              {isFull ? "Join waitlist" : "Register"}
            </button>
          </article>
        );
      })}
    </section>
  );
}
