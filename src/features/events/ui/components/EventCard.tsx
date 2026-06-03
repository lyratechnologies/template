import type { RouterOutputs } from "~/trpc/react";
import { Check, LogOut, Ticket, Users } from "lucide-react";

type EventSummary = RouterOutputs["events"]["list"][number];

type EventCardProps = {
  event: EventSummary;
  isActionPending: boolean;
  isSignedIn: boolean;
  onCancelRegistration: (eventId: string) => void;
  onLeaveWaitlist: (eventId: string) => void;
  onRegister: (eventId: string) => void;
};

export function EventCard({
  event,
  isActionPending,
  isSignedIn,
  onCancelRegistration,
  onLeaveWaitlist,
  onRegister,
}: EventCardProps) {
  const startsAt = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(event.startsAt);
  const capacityRemaining = Math.max(
    event.capacity - event.confirmedRegistrationCount,
    0
  );
  const isFull = capacityRemaining === 0;
  const capacityUsedPercent = Math.min(
    (event.confirmedRegistrationCount / event.capacity) * 100,
    100
  );
  const action = getEventAction(event.attendeeParticipation?.status, isFull);

  return (
    <article className="grid min-w-0 gap-5 rounded-md border border-[oklch(0.82_0.018_95)] bg-[oklch(0.998_0.004_95)] p-5 shadow-[0_1px_2px_oklch(0.4_0.02_95_/_0.08)] md:grid-cols-[1fr_auto] md:items-center">
      <div className="min-w-0">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-sm">
          <span className="rounded-md bg-[oklch(0.93_0.025_165)] px-2 py-1 font-medium text-[oklch(0.32_0.08_165)]">
            {startsAt}
          </span>
          <span className="rounded-md bg-[oklch(0.95_0.012_95)] px-2 py-1 text-[oklch(0.4_0.018_95)]">
            {isFull ? "Waitlist open" : `${capacityRemaining} open`}
          </span>
        </div>

        <h3 className="truncate text-2xl font-semibold">{event.title}</h3>
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
        className={
          action.tone === "secondary"
            ? "inline-flex h-11 min-w-36 items-center justify-center gap-2 rounded-md border border-[oklch(0.72_0.018_95)] px-5 text-sm font-medium text-[oklch(0.24_0.025_95)] transition-colors hover:bg-[oklch(0.94_0.012_95)] disabled:cursor-not-allowed disabled:text-[oklch(0.55_0.01_95)]"
            : "inline-flex h-11 min-w-36 items-center justify-center gap-2 rounded-md bg-[oklch(0.24_0.025_95)] px-5 text-sm font-medium text-[oklch(0.98_0.006_95)] transition-colors hover:bg-[oklch(0.34_0.075_165)] disabled:cursor-not-allowed disabled:bg-[oklch(0.75_0.01_95)]"
        }
        disabled={!isSignedIn || isActionPending}
        onClick={() => {
          if (action.kind === "cancelRegistration") {
            onCancelRegistration(event.id);
            return;
          }

          if (action.kind === "leaveWaitlist") {
            onLeaveWaitlist(event.id);
            return;
          }

          onRegister(event.id);
        }}
        type="button"
      >
        {action.kind === "cancelRegistration" ? (
          <LogOut className="size-4" aria-hidden="true" />
        ) : action.kind === "leaveWaitlist" || isFull ? (
          <Ticket className="size-4" aria-hidden="true" />
        ) : (
          <Check className="size-4" aria-hidden="true" />
        )}
        {action.label}
      </button>
    </article>
  );
}

function getEventAction(
  participationStatus: "registered" | "waitlisted" | undefined,
  isFull: boolean
) {
  if (participationStatus === "registered") {
    return {
      kind: "cancelRegistration" as const,
      label: "Unregister",
      tone: "secondary" as const,
    };
  }

  if (participationStatus === "waitlisted") {
    return {
      kind: "leaveWaitlist" as const,
      label: "Leave waitlist",
      tone: "secondary" as const,
    };
  }

  return {
    kind: "register" as const,
    label: isFull ? "Join waitlist" : "Register",
    tone: "primary" as const,
  };
}
