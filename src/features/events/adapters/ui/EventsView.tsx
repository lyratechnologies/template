"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CalendarPlus, Check, Plus, Ticket, Users } from "lucide-react";
import { toast } from "sonner";

import { useTRPC } from "~/trpc/react";

type EventsViewProps = {
  isSignedIn: boolean;
};

export function EventsView({ isSignedIn }: EventsViewProps) {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const eventsQuery = useQuery(trpc.events.list.queryOptions());
  const createEventMutation = useMutation(
    trpc.events.create.mutationOptions({
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: trpc.events.list.queryKey(),
        });
        toast.success("Event published");
      },
      onError: () => {
        toast.error("Event could not be created");
      },
    }),
  );
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

  function handleCreateEvent(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const title = getFormString(form, "title");
    const description = getFormString(form, "description");
    const startsAtValue = getFormString(form, "startsAt");
    const capacity = Number(getFormString(form, "capacity"));
    const startsAt = new Date(startsAtValue);
    const registrationOpensAt = new Date();

    if (!title || !description || Number.isNaN(startsAt.getTime()) || capacity < 1) {
      toast.warning("Enter a title, description, start time, and capacity");
      return;
    }

    createEventMutation.mutate(
      {
        title,
        description,
        startsAt,
        capacity,
        registrationOpensAt,
        registrationClosesAt: startsAt,
      },
      {
        onSuccess: () => {
          formElement.reset();
        },
      },
    );
  }

  const events = eventsQuery.data ?? [];

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
          isPending={createEventMutation.isPending}
          onSubmit={handleCreateEvent}
        />
      )}

      <section className="flex min-w-0 flex-col gap-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Published events</h2>
            <p className="text-sm text-[oklch(0.42_0.018_95)]">
              Register for available events or join the waitlist when capacity
              is full.
            </p>
          </div>
          <span className="text-sm font-medium text-[oklch(0.43_0.075_165)]">
            {events.length} {events.length === 1 ? "event" : "events"}
          </span>
        </div>

        {eventsQuery.isLoading ? (
          <StatusPanel label="Loading events" />
        ) : eventsQuery.isError ? (
          <StatusPanel
            label="Events could not be loaded."
            tone="error"
          />
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
              const capacityUsedPercent = Math.min(
                (event.confirmedRegistrationCount / event.capacity) * 100,
                100,
              );

              return (
                <article
                  className="grid min-w-0 gap-5 rounded-md border border-[oklch(0.82_0.018_95)] bg-[oklch(0.998_0.004_95)] p-5 shadow-[0_1px_2px_oklch(0.4_0.02_95_/_0.08)] md:grid-cols-[1fr_auto] md:items-center"
                  key={event.id}
                >
                  <div className="min-w-0">
                    <div className="mb-3 flex flex-wrap items-center gap-2 text-sm">
                      <span className="rounded-md bg-[oklch(0.93_0.025_165)] px-2 py-1 font-medium text-[oklch(0.32_0.08_165)]">
                        {startsAt}
                      </span>
                      <span className="rounded-md bg-[oklch(0.95_0.012_95)] px-2 py-1 text-[oklch(0.4_0.018_95)]">
                        {isFull ? "Waitlist open" : `${capacityRemaining} open`}
                      </span>
                    </div>

                    <h3 className="truncate text-2xl font-semibold">
                      {event.title}
                    </h3>
                    <p className="mt-2 max-w-[70ch] text-sm leading-6 text-[oklch(0.38_0.018_95)]">
                      {event.description}
                    </p>

                    <div className="mt-4 grid gap-2">
                      <div className="h-2 overflow-hidden rounded-full bg-[oklch(0.92_0.012_95)]">
                        <div
                          className="h-full rounded-full bg-[oklch(0.43_0.075_165)]"
                          style={{ width: `${capacityUsedPercent}%` }}
                        />
                      </div>
                      <dl className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[oklch(0.38_0.018_95)]">
                        <div className="flex items-center gap-1.5">
                          <Users className="size-4" aria-hidden="true" />
                          <dt className="font-medium text-[oklch(0.22_0.018_95)]">
                            Confirmed
                          </dt>
                          <dd>
                            {event.confirmedRegistrationCount}/{event.capacity}
                          </dd>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Ticket className="size-4" aria-hidden="true" />
                          <dt className="font-medium text-[oklch(0.22_0.018_95)]">
                            Waitlist
                          </dt>
                          <dd>{event.waitlistEntryCount}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <button
                    className="inline-flex h-11 min-w-36 items-center justify-center gap-2 rounded-md bg-[oklch(0.24_0.025_95)] px-5 text-sm font-medium text-[oklch(0.98_0.006_95)] transition-colors hover:bg-[oklch(0.34_0.075_165)] disabled:cursor-not-allowed disabled:bg-[oklch(0.75_0.01_95)]"
                    disabled={!isSignedIn || registerMutation.isPending}
                    onClick={() =>
                      registerMutation.mutate({
                        eventId: event.id,
                      })
                    }
                    type="button"
                  >
                    {isFull ? (
                      <Ticket className="size-4" aria-hidden="true" />
                    ) : (
                      <Check className="size-4" aria-hidden="true" />
                    )}
                    {isFull ? "Join waitlist" : "Register"}
                  </button>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

function StatusPanel({
  label,
  tone = "neutral",
}: {
  label: string;
  tone?: "neutral" | "error";
}) {
  return (
    <div
      className={
        tone === "error"
          ? "rounded-md border border-[oklch(0.7_0.12_25)] bg-[oklch(0.96_0.035_25)] p-6 text-sm text-[oklch(0.34_0.12_25)]"
          : "rounded-md border border-dashed border-[oklch(0.72_0.018_95)] bg-[oklch(0.998_0.004_95)] p-6 text-sm text-[oklch(0.38_0.018_95)]"
      }
    >
      {label}
    </div>
  );
}

function CreateEventForm({
  isPending,
  onSubmit,
}: {
  isPending: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  const [defaultStartsAt] = useState(() =>
    toDateTimeLocalValue(new Date(Date.now() + 24 * 60 * 60 * 1000)),
  );

  return (
    <form
      className="grid gap-5 rounded-md border border-[oklch(0.82_0.018_95)] bg-[oklch(0.998_0.004_95)] p-5 shadow-[0_1px_2px_oklch(0.4_0.02_95_/_0.08)]"
      onSubmit={onSubmit}
    >
      <div>
        <div className="mb-3 inline-flex size-10 items-center justify-center rounded-md bg-[oklch(0.93_0.025_165)] text-[oklch(0.32_0.08_165)]">
          <CalendarPlus className="size-5" aria-hidden="true" />
        </div>
        <h2 className="text-xl font-semibold">Create event</h2>
        <p className="mt-1 text-sm text-[oklch(0.38_0.018_95)]">
          Registration opens now and closes when the event starts.
        </p>
      </div>

      <div className="grid gap-3">
        <label className="grid gap-1 text-sm font-medium">
          Title
          <input
            className="h-11 min-w-0 rounded-md border border-[oklch(0.78_0.018_95)] bg-[oklch(0.99_0.004_95)] px-3 font-normal outline-none transition-colors focus:border-[oklch(0.43_0.075_165)]"
            name="title"
            placeholder="Community workshop"
            required
          />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Starts
          <input
            className="h-11 min-w-0 rounded-md border border-[oklch(0.78_0.018_95)] bg-[oklch(0.99_0.004_95)] px-3 font-normal outline-none transition-colors focus:border-[oklch(0.43_0.075_165)]"
            defaultValue={defaultStartsAt}
            name="startsAt"
            required
            type="datetime-local"
          />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Capacity
          <input
            className="h-11 min-w-0 rounded-md border border-[oklch(0.78_0.018_95)] bg-[oklch(0.99_0.004_95)] px-3 font-normal outline-none transition-colors focus:border-[oklch(0.43_0.075_165)]"
            defaultValue={20}
            min={1}
            name="capacity"
            required
            type="number"
          />
        </label>
      </div>

      <label className="grid gap-1 text-sm font-medium">
        Description
        <textarea
          className="min-h-28 min-w-0 resize-y rounded-md border border-[oklch(0.78_0.018_95)] bg-[oklch(0.99_0.004_95)] px-3 py-2 font-normal leading-6 outline-none transition-colors focus:border-[oklch(0.43_0.075_165)]"
          name="description"
          placeholder="What attendees should expect"
          required
        />
      </label>

      <div>
        <button
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[oklch(0.35_0.09_165)] px-5 text-sm font-medium text-[oklch(0.98_0.006_95)] transition-colors hover:bg-[oklch(0.3_0.09_165)] disabled:cursor-not-allowed disabled:bg-[oklch(0.75_0.01_95)]"
          disabled={isPending}
          type="submit"
        >
          <Plus className="size-4" aria-hidden="true" />
          {isPending ? "Creating" : "Create event"}
        </button>
      </div>
    </form>
  );
}

function toDateTimeLocalValue(date: Date) {
  const offsetDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return offsetDate.toISOString().slice(0, 16);
}

function getFormString(form: FormData, key: string) {
  const value = form.get(key);
  return typeof value === "string" ? value : "";
}
