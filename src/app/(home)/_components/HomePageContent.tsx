/**
 * Page Orchestration Component
 *
 * This component lives in _components because it handles:
 * - Page structure and layout decisions
 * - Data fetching coordination (what to prefetch)
 * - Loading state management
 * - Error boundary setup
 * - Authentication-based rendering logic
 *
 * Notice: All business logic components (Posts, LatestPost, etc.)
 * are imported from the features folder. This component only
 * orchestrates how they work together.
 *
 * Pattern Benefits:
 * - Clear separation between layout and business logic
 * - Easy to understand page structure at a glance
 * - Reusable feature components across different pages
 * - Centralized data fetching strategy per page
 */
import { headers } from "next/headers";

import {
  GetPost,
  HelloMessage,
  LatestPost,
  Posts,
} from "~/features/post/components/post";
import PostErrorBoundary from "~/features/post/components/PostErrorBoundary";
import { Await } from "~/features/shared/components/Await";
import { LoadingSpinner } from "~/features/shared/components/LoadingSpinner";
import { auth } from "~/server/auth";
import { signInWithDiscord, signOut } from "~/server/auth/actions";
import { trpc } from "~/trpc/server";

export async function HomePageContent() {
  // This is to simulate auth loading time
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-center">
          <p className="text-xl text-gray-400">
            Sign in to create posts and see your content
          </p>
        </div>

        <form action={signInWithDiscord}>
          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-[hsl(280,100%,70%)] to-[hsl(240,100%,70%)] px-8 py-3 font-semibold text-white no-underline transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }

  return (
    <>
      {/* Main Content */}
      {/* 
        SSR Streaming Pattern:
        - prefetch: Server-side data fetching for all child components
        - fallback: Shows while data is being streamed
        - ErrorBoundaryComponent: Handles errors in child components
        
        This pattern enables:
        1. Fast initial page load (streaming HTML)
        2. SEO-friendly server rendering
        3. Progressive enhancement as data arrives
        4. Granular error handling per component
      */}
      <Await
        fallback={<LoadingSpinner />}
        prefetch={[
          trpc.post.all.queryOptions(),
          trpc.post.latest.queryOptions(),
          trpc.post.hello.queryOptions({ text: "from tRPC" }),
        ]}
        ErrorBoundaryComponent={PostErrorBoundary}
      >
        <div className="mx-auto max-w-6xl">
          {/* Posts Section */}
          <div className="mb-12">
            <h2 className="mb-6 text-center text-3xl font-bold">
              Recent Posts
            </h2>
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm">
              <Posts />
            </div>
          </div>

          {/* Create Post Section */}
          {session?.user && (
            <div className="mb-12">
              <h2 className="mb-6 text-center text-3xl font-bold">
                Create a Post or Get a Post
              </h2>
              <div className="flex justify-center rounded-xl bg-white/5 p-6 backdrop-blur-sm">
                <div className="w-[500px]">
                  <LatestPost />
                </div>
                <div className="w-[500px]">
                  <PostErrorBoundary>
                    <GetPost />
                  </PostErrorBoundary>
                </div>
              </div>
            </div>
          )}

          {/* Status Section */}
          <div className="rounded-xl bg-white/5 p-8 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-6">
              <div className="text-center">
                <HelloMessage />
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-xl text-white">
                    Welcome back,{" "}
                    <span className="font-semibold text-[hsl(280,100%,70%)]">
                      {session.user?.name}
                    </span>
                    !
                  </p>
                </div>

                <form action={signOut}>
                  <button
                    type="submit"
                    className="rounded-full bg-gradient-to-r from-[hsl(280,100%,70%)] to-[hsl(240,100%,70%)] px-8 py-3 font-semibold text-white no-underline transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Await>
    </>
  );
}
