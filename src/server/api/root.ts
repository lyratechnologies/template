import "server-only";

import { eventsRouter } from "~/features/events/adapters/api/events-router";
import { registrationsRouter } from "~/features/registrations/adapters/api/registrations-router";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  events: eventsRouter,
  registrations: registrationsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.registrations.registerForEvent();
 *       ^? RegisterForEventOutput
 */
export const createCaller = createCallerFactory(appRouter);
