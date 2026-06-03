"use client";

import type { FallbackProps } from "react-error-boundary";

import ReusableErrorBoundary from "~/features/shared/components/ReusableErrorBoundary";

export function EventsErrorBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReusableErrorBoundary FallbackComponent={EventsErrorMessage}>
      {children}
    </ReusableErrorBoundary>
  );
}

function EventsErrorMessage({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="rounded-md border border-[oklch(0.7_0.12_25)] bg-[oklch(0.96_0.035_25)] p-6 text-sm text-[oklch(0.34_0.12_25)]">
      <h2 className="text-base font-semibold">Events could not be loaded</h2>
      <p className="mt-2 leading-6">
        {error instanceof Error
          ? error.message
          : "Refresh the list and try again."}
      </p>
      <button
        className="mt-4 inline-flex h-10 items-center rounded-md bg-[oklch(0.34_0.12_25)] px-4 text-sm font-medium text-[oklch(0.98_0.006_95)]"
        onClick={resetErrorBoundary}
        type="button"
      >
        Retry
      </button>
    </div>
  );
}
