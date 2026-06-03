import { headers } from "next/headers";

import { auth } from "~/server/auth";
import { signInWithDiscord, signOut } from "~/server/auth/actions";

import { EventsView } from "./EventsView";

export async function EventsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <main className="min-h-screen bg-[oklch(0.985_0.006_95)] text-[oklch(0.18_0.018_95)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-8 sm:px-8 lg:py-12">
        <header className="flex flex-col gap-5 border-b border-[oklch(0.82_0.018_95)] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-medium text-[oklch(0.43_0.075_165)]">
              Event Registration
            </p>
            <h1 className="text-4xl font-semibold tracking-normal sm:text-5xl">
              Events and registrations
            </h1>
            <p className="mt-4 max-w-[65ch] text-base leading-7 text-[oklch(0.38_0.018_95)]">
              Browse open events, register while capacity is available, or join
              the waitlist when an event is full.
            </p>
          </div>

          {session ? (
            <div className="flex flex-col items-start gap-3 sm:items-end">
              <p className="text-sm text-[oklch(0.38_0.018_95)]">
                Signed in as{" "}
                <span className="font-medium text-[oklch(0.22_0.018_95)]">
                  {session.user.name}
                </span>
              </p>
              <form action={signOut}>
                <button
                  type="submit"
                  className="h-10 border border-[oklch(0.72_0.018_95)] px-4 text-sm font-medium transition-colors hover:bg-[oklch(0.94_0.012_95)]"
                >
                  Sign out
                </button>
              </form>
            </div>
          ) : (
            <form action={signInWithDiscord}>
              <button
                type="submit"
                className="h-10 bg-[oklch(0.35_0.09_165)] px-4 text-sm font-medium text-[oklch(0.98_0.006_95)] transition-colors hover:bg-[oklch(0.3_0.09_165)]"
              >
                Sign in to register
              </button>
            </form>
          )}
        </header>

        <EventsView isSignedIn={Boolean(session)} />
      </div>
    </main>
  );
}
