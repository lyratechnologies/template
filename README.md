# Lyra Template

This is an opinionated Next.js template for a small **Event Registration** demo domain. It keeps the full stack in feature slices while preserving clean architecture boundaries: domain rules stay independent, application services orchestrate use cases, repositories adapt persistence, tRPC routers translate transport, and React UI stays out of the database.

The template uses:

- [Next.js](https://nextjs.org) App Router
- [Bun](https://bun.sh) for dependency management and scripts
- [Better Auth](https://www.better-auth.com) for authentication
- [Prisma](https://prisma.io) for persistence
- [tRPC](https://trpc.io) for type-safe APIs
- [Zod](https://zod.dev) for runtime schemas and inferred TypeScript types
- [Tailwind CSS](https://tailwindcss.com) and shadcn-style UI primitives
- [Vitest](https://vitest.dev) for fast domain and service tests

## Architecture Overview

This template demonstrates full-stack vertical slices with clean architecture boundaries. A feature owns a cohesive business capability end to end: domain language, use-case services, repository contracts/adapters, API routes, and UI.

The demo intentionally replaces generic starter examples with a business workflow:

- create an **Event**
- register an **Attendee**
- enforce **Capacity**
- place attendees on a **Waitlist Entry** when full
- promote the next waitlisted attendee when a confirmed **Registration** is cancelled
- queue a **Notification** for cross-account waitlist promotion

The domain language is documented in [CONTEXT.md](CONTEXT.md). The deeper architecture rules are documented in [docs/architecture.md](docs/architecture.md) and ADRs under [docs/adr](docs/adr).

## Key Architectural Decisions

### 1. Vertical Slices Own Business Capabilities

Feature folders are organized around business capabilities, not every database table or every technical concern.

```txt
src/features/
  events/
    domain/
    services/
    repositories/
    adapters/
    api/
    ui/
    index.ts
  notifications/
    domain/
    api/
    index.ts
  shared/
    components/
    hooks/
    utils.ts
```

In this demo, **Event**, **Registration**, and **Waitlist Entry** live together in `events/` because they form one workflow. Registration outcomes depend on event capacity and registration windows, so splitting them into separate features would add ceremony without a real boundary.

`notifications/` is separate because message delivery reacts to event-registration outcomes without owning event-registration rules.

### 2. Domain Is the Innermost Layer

Domain code lives in `domain/`. It owns business concepts, invariants, domain events, and framework-free functions.

```txt
src/features/events/domain/
  event.ts
  registration.ts
  test/
    registration.test.ts
```

Domain code may use framework-free libraries such as Zod, but it must not import React, Next.js, tRPC, Prisma, Better Auth, server modules, generated persistence types, repositories, services, API routers, or UI.

Example domain responsibility:

```ts
export function getActiveWaitlistRank(
  waitlistEntry: Pick<WaitlistEntrySummary, "id">,
  activeWaitlistEntries: Array<Pick<WaitlistEntrySummary, "id" | "position">>
) {
  const activeRank = [...activeWaitlistEntries]
    .sort((left, right) => left.position - right.position)
    .findIndex(
      (activeWaitlistEntry) => activeWaitlistEntry.id === waitlistEntry.id
    );

  return activeRank === -1 ? null : activeRank + 1;
}
```

### 3. Services Represent Use-Case Workflows

Application services live in `services/`. They are plain TypeScript functions that orchestrate workflows using explicit repository dependencies.

```txt
src/features/events/services/
  register-for-event.ts
  cancel-registration.ts
  leave-waitlist.ts
  create-event.ts
  test/
    register-for-event.test.ts
    cancel-registration.test.ts
```

Services are added when an operation has real business orchestration. They are not required for every tiny read endpoint.

Example service shape:

```ts
export async function registerForEvent(
  input: RegisterForEventInput,
  repositories: RegisterForEventRepositories
): Promise<RegisterForEventOutput> {
  // use domain rules and repository contracts
}
```

Services depend on:

- domain schemas and functions
- repository contracts

Services do not depend on:

- Prisma
- tRPC
- Better Auth
- React
- Next.js request/session objects
- database clients

Expected business outcomes are returned as typed result states, not thrown as transport errors.

```ts
type RegisterForEventOutput =
  | { status: "registered"; registration: RegistrationSummary }
  | { status: "waitlisted"; waitlistEntry: WaitlistEntrySummary }
  | { status: "rejected"; reason: RegisterForEventRejectionReason };
```

### 4. Repositories Define Ports, Adapters Implement Them

Repository contracts live in `repositories/`. They define the persistence operations that services need without committing those services to Prisma, SQL, HTTP, or any other concrete technology.

```txt
src/features/events/repositories/
  event-repository.ts
  registration-repository.ts
```

Repository interfaces are named after feature concepts, but methods are shaped by workflows rather than generic CRUD.

```ts
export interface EventRepository {
  createEvent(input: CreateEventRepositoryInput): Promise<EventSummary>;
  findRegistrationSnapshot(
    eventId: string
  ): Promise<EventRegistrationSnapshot | null>;
  listOpenEvents(input?: ListOpenEventsInput): Promise<EventSummary[]>;
}
```

Concrete outbound adapters live in `adapters/`.

```txt
src/features/events/adapters/
  prisma-event-adapter.ts
  prisma-registration-adapter.ts
  helper.ts
```

The Prisma adapter imports generated Prisma types and maps database records into domain summaries. Generated Prisma types stay in adapters, not in domain or service code.

### 5. tRPC Routers Are Transport Boundaries

Feature routers live in `api/`.

```txt
src/features/events/api/
  events-router.ts

src/features/notifications/api/
  notifications-router.ts
```

Routers are intentionally thin. They:

- parse input with service schemas
- read the actor from `ctx.session`
- construct repository implementations
- call application services
- dispatch cross-feature reactions where appropriate
- return typed outputs to the client

The root router only composes feature routers in [src/server/api/root.ts](src/server/api/root.ts).

### 6. UI Lives With the Feature

React screens and feature-specific UI live in `ui/`.

```txt
src/features/events/ui/
  EventsPage.tsx
  EventsView.tsx
  EventsErrorBoundary.tsx
  components/
    CreateEventForm.tsx
    EventCard.tsx
    NotificationInbox.tsx
    PublishedEventsSection.tsx
    StatusPanel.tsx
  hooks/
    use-events-actions.ts
```

UI can call the tRPC client and use shared UI primitives, but it must not import repositories, Prisma, generated persistence code, or `src/server/db`.

`EventsView.tsx` stays as the screen composition boundary. Form rendering, event cards, notification inbox, and status panels live in `components/`; tRPC queries, mutations, invalidation, form parsing, and toast side effects live in `hooks/use-events-actions.ts`.

Shared UI primitives live under:

```txt
src/features/shared/components/
src/features/shared/hooks/
src/features/shared/utils.ts
```

The App Router stays a composition layer. For example, [src/app/page.tsx](src/app/page.tsx) imports the feature page container and renders it.

### 7. Cross-Feature Imports Use Public APIs

Feature internals should not import their own `index.ts` barrel. Inside a feature, import the concrete module so the dependency is obvious.

```ts
// Good inside src/features/events/api/events-router.ts

// Avoid inside src/features/events/**
import { registerForEvent } from "~/features/events";

import { registerForEvent } from "../services/register-for-event";
```

Cross-feature imports should go through the other feature's public `index.ts`.

```ts
// Good: events reacts through notifications' public boundary
import { queueWaitlistPromotionNotification } from "~/features/notifications";
```

This keeps feature boundaries narrow while preserving discoverability for other slices.

### 8. Import Hierarchy Is Enforced By ESLint

The clean architecture dependency direction is:

```txt
src/app
  -> feature UI pages / root API composition

feature/ui
  -> tRPC client
  -> shared UI
  -> feature display types

feature/api
  -> feature services
  -> feature repository factories
  -> server API context
  -> other feature public APIs for reactions

feature/services
  -> feature domain
  -> feature repository contracts

feature/repositories
  -> feature domain

feature/adapters
  -> feature domain
  -> feature repository contracts
  -> generated Prisma / persistence adapters

feature/domain
  -> framework-free libraries only
```

Visualized:

```txt
                    src/app
        route composition and mounting
                         |
                         v
        +----------------+----------------+
        |                                 |
        v                                 v
 feature/ui                         feature/api
 React screens                      tRPC routers
 user interaction                   transport boundary
        |                                 |
        |                                 v
        |                         feature/services
        |                         use-case workflows
        |                         business orchestration
        |                                 |
        |                                 v
        |                         feature/domain
        |                         schemas, invariants,
        |                         pure business rules
        |
        v
 shared/ui
 generic components,
 hooks, utilities
```

Repositories sit beside services as adapters:

```txt
feature/api
    |
    v
feature/services  --->  feature/repositories/contracts
    |                         ^
    v                         |
feature/domain       feature/adapters/prisma
                              |
                              v
                      generated/prisma + database
```

The ESLint config dynamically discovers directories under `src/features` and applies generic restrictions for each feature. It blocks self-barrel imports and prevents inner layers from importing outer layers or infrastructure.

## Project Structure

```txt
src/
  app/
    api/
      auth/[...all]/route.ts
      trpc/[trpc]/route.ts
    page.tsx
  features/
    events/
      domain/
        event.ts
        registration.ts
        test/
      services/
        create-event.ts
        register-for-event.ts
        cancel-registration.ts
        leave-waitlist.ts
        test/
      repositories/
        event-repository.ts
        registration-repository.ts
      adapters/
        prisma-event-adapter.ts
        prisma-registration-adapter.ts
        helper.ts
      api/
        events-router.ts
      ui/
        EventsPage.tsx
        EventsView.tsx
        EventsErrorBoundary.tsx
        components/
          CreateEventForm.tsx
          EventCard.tsx
          NotificationInbox.tsx
          PublishedEventsSection.tsx
          StatusPanel.tsx
        hooks/
          use-events-actions.ts
      index.ts
    notifications/
      domain/
        notification.ts
        test/
      api/
        notifications-router.ts
      index.ts
    shared/
      components/
      hooks/
      utils.ts
  server/
    api/
      root.ts
      trpc.ts
    auth/
    db.ts
generated/
  prisma/
  zod/
prisma/
  schema.prisma
  models/
```

## Domain Workflow

The core workflow is `registerForEvent`.

It returns `"registered"` when:

- the event exists
- registration is open
- capacity is available
- the attendee has no active registration

It returns `"waitlisted"` when:

- registration is open
- the event is full
- the attendee has no active registration or active waitlist entry

It returns `"rejected"` for expected business rejections, such as:

- event not found
- registration closed
- already registered
- already waitlisted

Cancellation can promote the next active waitlist entry. That emits a `WaitlistPromoted` event-registration event, which the API layer dispatches to the `notifications/` feature.

## Authentication

Better Auth infrastructure lives under [src/server/auth](src/server/auth). The route handler is mounted at [src/app/api/auth/[...all]/route.ts](src/app/api/auth/%5B...all%5D/route.ts).

Domain and service code should receive explicit domain identities, such as `attendeeId`, rather than Better Auth session objects.

In this template:

- **User** is auth infrastructure language
- **Attendee** is event-registration domain language

## Database And Generated Code

Prisma is configured through [prisma.config.ts](prisma.config.ts), with schema files under [prisma](prisma).

The Prisma client and Prisma Zod schemas are generated into committed root-level output directories:

```txt
generated/
  prisma/
  zod/
```

Regenerate after schema changes:

```bash
bun run db:generate
```

Generated imports should stay in repository or API-adjacent code:

```ts
import type { PrismaClient } from "generated/prisma/client";
```

Domain and service code must not import generated Prisma or generated Zod modules.

## Environment

Create a local `.env` file with:

```bash
DATABASE_URL="file:./dev.db"
BETTER_AUTH_SECRET="replace-me"
AUTH_GOOGLE_ID="replace-me"
AUTH_GOOGLE_SECRET="replace-me"
BETTER_AUTH_URL="http://localhost:3000"
```

`BETTER_AUTH_URL` is optional in local development but recommended so Better Auth does not infer the base URL from incoming requests.

For Google OAuth, create an OAuth client in Google Cloud Console, then set:

- `AUTH_GOOGLE_ID` to the OAuth client ID
- `AUTH_GOOGLE_SECRET` to the OAuth client secret

## Getting Started

Install dependencies:

```bash
bun install
```

Generate Prisma output:

```bash
bun run db:generate
```

Apply the schema locally:

```bash
bun run db:push
```

Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Common Commands

```bash
bun run dev
bun run test
bun run typecheck
bun run lint
bun run build
bun run db:generate
bun run db:push
bun run db:migrate
bun run db:studio
```

## Testing Strategy

Domain and service tests run without Next.js, tRPC, Better Auth, Prisma, or a database. This keeps the core business rules fast and deterministic.

```txt
src/features/events/domain/test/
src/features/events/services/test/
src/features/notifications/domain/test/
```

Run:

```bash
bun run test
```

The architecture makes it straightforward to add slower integration tests later around Prisma repositories, tRPC routers, and browser workflows without weakening the fast domain/service test layer.

## Architecture Benefits Summary

1. **Business language is explicit**: Event, Attendee, Registration, Waitlist Entry, Capacity, Registration Window, and Notification are documented and reflected in code.
2. **Use cases are testable**: Services depend on repository contracts, so tests can run without infrastructure.
3. **Persistence is replaceable**: Prisma details stay in repository adapters.
4. **Transport stays thin**: tRPC routers translate requests into use-case calls instead of owning business rules.
5. **UI cannot reach into the database**: React code talks through API/client boundaries.
6. **Feature boundaries are enforceable**: ESLint blocks self-barrels, deep infrastructure imports, and layer violations.
7. **Small features stay small**: `notifications/` demonstrates a thin feature without empty ceremony folders.

## Learn More

- [CONTEXT.md](CONTEXT.md)
- [docs/architecture.md](docs/architecture.md)
- [docs/adr/0001-adopt-full-stack-vertical-slices-with-clean-architecture.md](docs/adr/0001-adopt-full-stack-vertical-slices-with-clean-architecture.md)
- [docs/adr/0002-use-feature-services-and-repositories-for-event-workflows.md](docs/adr/0002-use-feature-services-and-repositories-for-event-workflows.md)
