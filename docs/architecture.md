# Architecture

This template uses full-stack vertical slices with clean architecture boundaries. A feature owns its domain language, application use cases, API adapter, persistence adapter, and UI.

## Target Structure

```txt
src/
  app/
    page.tsx
    events/[id]/page.tsx
    my-registrations/page.tsx
  features/
    events/
      domain/
      application/
      adapters/
        api/
        persistence/
        ui/
      index.ts
    registrations/
      domain/
      application/
      adapters/
        api/
        persistence/
        ui/
      index.ts
  server/
    api/
    auth/
    db.ts
  shared/
    application/
    ui/
    utils/
generated/
  prisma/
  zod/
```

## Dependency Rules

- `domain/` owns business concepts, invariants, value objects, and Zod-first domain schemas.
- `application/` owns use cases, use-case input/output schemas, typed outcomes, and per-use-case ports.
- `adapters/api/` owns tRPC routers and transport translation.
- `adapters/persistence/` owns Prisma access, generated schema usage, and persistence-to-domain mapping.
- `adapters/ui/` owns feature containers, presentational components, and feature hooks.
- `src/app` is routing composition only. Route files import feature page containers.
- `src/shared` is for generic UI, utilities, and framework-free primitives only.
- `generated/*` is adapter support. Domain and application code must not import generated Prisma or Zod modules.

Cross-slice imports must go through narrow public `index.ts` exports. Deep imports into another slice's `domain`, `application`, or `adapters` directories are forbidden.

## Domain Models

Domain models are Zod-first when runtime validation or invariants matter. Prisma-generated schemas may reduce adapter boilerplate, but they do not define domain language.

```ts
export const EventCapacitySchema = z.number().int().positive().brand<"EventCapacity">();
export type EventCapacity = z.infer<typeof EventCapacitySchema>;
```

Use generated Prisma/Zod schemas in persistence adapters and API-adjacent DTO composition when the shape is intentionally persistence-like.

## Use Cases

Use cases are plain functions with explicit ports.

```ts
export async function registerForEvent(
  input: RegisterForEventInput,
  ports: RegisterForEventPorts
): Promise<RegisterForEventOutput> {}
```

Each use case owns its specific input schema, output schema, result type, and port type. Shared business concepts stay in `domain/`.

Expected business outcomes are returned as typed response states, not thrown as tRPC errors.

```ts
export const RegisterForEventOutputSchema = z.discriminatedUnion("status", [
  z.object({ status: z.literal("registered"), registration: RegistrationSummarySchema }),
  z.object({ status: z.literal("waitlisted"), waitlistEntry: WaitlistEntrySummarySchema }),
  z.object({ status: z.literal("rejected"), reason: RegisterForEventRejectionReasonSchema }),
]);
```

Throw only for system failures, authorization failures, permission failures, or unexpected states.

## Ports And Transactions

Ports are defined per use case by default. This keeps each workflow's dependency surface explicit and prevents broad repositories from accumulating unrelated methods.

Persistence adapters expose per-use-case port factories:

```ts
export function createPrismaRegisterForEventPorts(db: PrismaClient): RegisterForEventPorts {
  return {
    findEventById,
    findActiveRegistration,
    countConfirmedRegistrations,
    createConfirmedRegistration,
    createWaitlistEntry,
    runInTransaction,
  };
}
```

Use cases own transaction boundaries through a transaction port. Prisma transaction clients stay inside persistence adapters.

## API

tRPC remains the primary API adapter. Routers live inside feature slices and stay thin:

- parse input with use-case schemas,
- derive the actor from auth/session context,
- construct the use-case ports,
- call the use case,
- return typed output states.

Root API composition only mounts slice routers.

## UI

Feature UI lives with the slice:

```txt
src/features/events/adapters/ui/
  EventsPage.tsx
  EventsView.tsx
  EventCard.tsx
```

Use role-based suffixes at page boundaries:

- `EventsPage.tsx` for container/page orchestration,
- `EventsView.tsx` for presentational screen layout,
- domain-specific names for child components.

Shared shadcn-style primitives live in `src/shared/ui`.

## Auth

Better Auth is infrastructure and lives under `src/server/auth`. Domain and application code receive an `Actor` or explicit domain identity, not Better Auth session objects.

In this demo domain, use **Attendee** for the business concept and reserve "user" for auth infrastructure.

Better Auth migration belongs to the tooling modernization phase because it changes dependencies, Prisma schema, generated types, and route setup before feature architecture is applied.

## Generated Code

Prisma client and Prisma Zod schemas are generated into root-level `generated/`:

```prisma
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

generator zod {
  provider = "prisma-zod-generator"
  output   = "../generated/zod"
}
```

Generated files are committed so the template is inspectable after checkout. Regenerate them with `bun run db:generate`.

## Testing

Use Vitest for domain and application tests. These tests should run without Next.js, tRPC, Better Auth, Prisma, or a database.

```txt
src/features/events/domain/event.test.ts
src/features/registrations/application/register-for-event.test.ts
src/features/registrations/application/cancel-registration.test.ts
```

The architecture should make use-case tests fast and dependency-light.
