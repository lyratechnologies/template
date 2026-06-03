/**
 * SSR Streaming Pattern Component
 *
 * This component implements React's Suspense streaming pattern with tRPC,
 * enabling progressive rendering and optimal performance.
 *
 * How it works:
 * 1. Server prefetches data using tRPC queries
 * 2. React streams HTML to client while data loads
 * 3. Components progressively render as data arrives
 * 4. Client hydrates with prefetched data (no refetch)
 *
 * Benefits:
 * - Faster Time to First Byte (TTFB)
 * - Better Core Web Vitals scores
 * - SEO-friendly server rendering
 * - Eliminates client-side waterfalls
 * - Type-safe data fetching with tRPC
 *
 * Use cases:
 * - Pages with multiple data dependencies
 * - Lists that need server-side rendering
 * - Dashboard with multiple widgets
 * - Any page where SEO matters
 *
 * Example usage:
 * <Await
 *   fallback={<LoadingSpinner />}
 *   prefetch={[trpc.post.all.queryOptions()]}
 *   ErrorBoundaryComponent={ErrorBoundary}
 * >
 *   <PostList />
 * </Await>
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactNode } from "react";
import { Suspense } from "react";
import { type TRPCQueryOptions } from "@trpc/tanstack-react-query";

import { HydrateClient, prefetch as prefetchTRPC } from "~/trpc/server";

type AwaitProps<T> =
  | {
      promise: Promise<T>;
      children: (data: T) => ReactNode;
      fallback: ReactNode;
      prefetch: ReturnType<TRPCQueryOptions<any>>[];
      ErrorBoundaryComponent: React.ComponentType<{
        children: React.ReactNode;
      }>;
    }
  | {
      promise?: undefined;
      children: ReactNode;
      fallback: ReactNode;
      prefetch: ReturnType<TRPCQueryOptions<any>>[];
      ErrorBoundaryComponent: React.ComponentType<{
        children: React.ReactNode;
      }>;
    };

export function Await<T>({
  promise,
  children,
  fallback,
  ErrorBoundaryComponent,
  prefetch,
}: AwaitProps<T>) {
  const innerChildren = promise ? (
    <AwaitResult promise={promise}>{(data) => children(data)}</AwaitResult>
  ) : (
    <>{children}</>
  );

  // Server-side prefetching: This runs on the server and populates
  // the tRPC cache, which is then serialized and sent to the client
  prefetch.map((p) => {
    prefetchTRPC(p);
  });

  return (
    // Suspense boundary enables streaming - React can flush content
    // before this boundary while waiting for children to resolve
    <Suspense fallback={<>{fallback}</>}>
      {/* HydrateClient serializes prefetched data for client hydration */}
      <HydrateClient>
        {/* Error boundary provides resilience - errors in data fetching
            won't break the entire page, just this component tree */}
        <ErrorBoundaryComponent>{innerChildren}</ErrorBoundaryComponent>
      </HydrateClient>
    </Suspense>
  );
}

type AwaitResultProps<T> = {
  promise: Promise<T>;
  children: (data: T) => ReactNode;
};

/**
 * Server Component that awaits promise resolution
 * This enables the render-as-you-fetch pattern where
 * components suspend until their data is ready
 */
async function AwaitResult<T>({ promise, children }: AwaitResultProps<T>) {
  const data = await promise;
  return <>{children(data)}</>;
}
