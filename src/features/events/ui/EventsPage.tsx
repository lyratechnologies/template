import { LogOut } from "lucide-react";
import { headers } from "next/headers";

import { Await } from "~/features/shared/components/Await";
import { LoadingSpinner } from "~/features/shared/components/LoadingSpinner";
import { auth } from "~/server/auth";
import { signInWithGoogle, signOut } from "~/server/auth/actions";
import { trpc } from "~/trpc/server";

import { EventsErrorBoundary } from "./EventsErrorBoundary";
import { EventsView } from "./EventsView";

export async function EventsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <main className="min-h-screen bg-[oklch(0.985_0.006_95)] text-[oklch(0.18_0.018_95)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-6 sm:px-8 lg:py-10">
        <header className="grid gap-6 border-b border-[oklch(0.82_0.018_95)] pb-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-medium text-[oklch(0.43_0.075_165)]">
              Event Registration
            </p>
            <h1 className="text-4xl font-semibold tracking-normal">
              Events and registrations
            </h1>
            <p className="mt-4 max-w-[65ch] text-base leading-7 text-[oklch(0.38_0.018_95)]">
              Browse open events, register while capacity is available, or join
              the waitlist when an event is full.
            </p>
          </div>

          {session ? (
            <div className="flex flex-col items-start gap-3 rounded-md border border-[oklch(0.82_0.018_95)] bg-[oklch(0.998_0.004_95)] p-4 lg:min-w-72">
              <p className="text-sm leading-6 text-[oklch(0.38_0.018_95)]">
                Signed in as{" "}
                <span className="block font-semibold text-[oklch(0.22_0.018_95)]">
                  {session.user.name}
                </span>
              </p>
              <form action={signOut}>
                <button
                  type="submit"
                  className="inline-flex h-10 items-center gap-2 rounded-md border border-[oklch(0.72_0.018_95)] px-4 text-sm font-medium transition-colors hover:bg-[oklch(0.94_0.012_95)]"
                >
                  <LogOut className="size-4" aria-hidden="true" />
                  Sign out
                </button>
              </form>
            </div>
          ) : (
            <form action={signInWithGoogle}>
              <button
                type="submit"
                className="h-10 bg-[oklch(0.35_0.09_165)] px-4 text-sm font-medium text-[oklch(0.98_0.006_95)] transition-colors hover:bg-[oklch(0.3_0.09_165)]"
              >
                Sign in with Google
              </button>
            </form>
          )}
        </header>

        <Await
          fallback={<LoadingSpinner />}
          prefetch={[trpc.events.list.queryOptions()]}
          ErrorBoundaryComponent={EventsErrorBoundary}
        >
          <EventsView isSignedIn={Boolean(session)} />
        </Await>
      </div>
    </main>
  );
}
