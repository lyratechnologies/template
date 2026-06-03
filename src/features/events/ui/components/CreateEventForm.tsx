import type { FormEvent } from "react";
import { useState } from "react";
import { CalendarPlus, Plus } from "lucide-react";

type CreateEventFormProps = {
  isPending: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function CreateEventForm({ isPending, onSubmit }: CreateEventFormProps) {
  const [defaultStartsAt] = useState(() =>
    toDateTimeLocalValue(new Date(Date.now() + 24 * 60 * 60 * 1000))
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
            className="h-11 min-w-0 rounded-md border border-[oklch(0.78_0.018_95)] bg-[oklch(0.99_0.004_95)] px-3 font-normal transition-colors outline-none focus:border-[oklch(0.43_0.075_165)]"
            name="title"
            placeholder="Community workshop"
            required
          />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Starts
          <input
            className="h-11 min-w-0 rounded-md border border-[oklch(0.78_0.018_95)] bg-[oklch(0.99_0.004_95)] px-3 font-normal transition-colors outline-none focus:border-[oklch(0.43_0.075_165)]"
            defaultValue={defaultStartsAt}
            name="startsAt"
            required
            type="datetime-local"
          />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Capacity
          <input
            className="h-11 min-w-0 rounded-md border border-[oklch(0.78_0.018_95)] bg-[oklch(0.99_0.004_95)] px-3 font-normal transition-colors outline-none focus:border-[oklch(0.43_0.075_165)]"
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
          className="min-h-28 min-w-0 resize-y rounded-md border border-[oklch(0.78_0.018_95)] bg-[oklch(0.99_0.004_95)] px-3 py-2 leading-6 font-normal transition-colors outline-none focus:border-[oklch(0.43_0.075_165)]"
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
  const offsetDate = new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
  );
  return offsetDate.toISOString().slice(0, 16);
}
