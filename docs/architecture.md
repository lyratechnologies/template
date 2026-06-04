# Architecture

This template uses full-stack vertical slices with clean architecture boundaries. A feature owns a cohesive business capability: its domain language, service-layer workflows, repositories, API, and UI. Features are not split by every noun in the domain.

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
      services/
      repositories/
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
  server/
    api/
    auth/
    db.ts
generated/
  prisma/
  zod/
```

## Dependency Rules

- `domain/` owns business concepts, invariants, value objects, and Zod-first domain schemas.
- `services/` owns application services: use-case workflows, input/output schemas, typed outcomes, and dependencies expressed as repository contracts.
- `repositories/` owns persistence contracts that services depend on, grouped by feature concept.
- `repositories/<concept>/adapters/` owns concrete outbound implementations, such as Prisma adapters, generated schema usage, and persistence-to-domain mapping.
- `api/` owns tRPC routers and transport translation.
- `ui/` owns feature containers, presentational components, and feature hooks.
- `src/app` is routing composition only. Route files import feature page containers.
- `src/features/shared` is for generic UI, utilities, and framework-free primitives only.
- `generated/*` is repository support. Domain and service code must not import generated Prisma or Zod modules.

Cross-slice imports must go through narrow public `index.ts` exports. Deep imports into another slice's `domain`, `services`, `repositories`, `api`, or `ui` directories are forbidden.

Split features when the language, lifecycle, owners, or infrastructure concerns diverge. Keep tightly coupled concepts together when they form one business workflow. In this demo, `events/` owns event publishing, registration, capacity, and waitlist workflows. **Event**, **Registration**, and **Waitlist Entry** belong to the event capability because registration and waitlist outcomes depend on event capacity and registration windows. **Notifications** is separate because message delivery is a different capability that can react to event-registration outcomes without owning those rules.

Small side features do not need empty `services/` and `repositories/` folders when the split would be ceremony. The `notifications/` feature is intentionally thin: it owns notification domain types, a tRPC router, and a small in-memory inbox module. The useful demo notification is cross-account: when one attendee cancels a confirmed registration, the next waitlisted attendee can be promoted and notified. A production app can replace that in-memory module with an email provider, queue, outbox, or database-backed adapter without changing the events workflow.

## Domain Models

Domain models are Zod-first when runtime validation or invariants matter. Prefer serializable domain data plus domain functions over mandatory entity classes. Introduce classes only when behavior is genuinely stateful enough that functional modules become awkward. Prisma-generated schemas may reduce repository boilerplate, but they do not define domain language.

```ts
export const EventCapacitySchema = z
  .number()
  .int()
  .positive()
  .brand<"EventCapacity">();
export type EventCapacity = z.infer<typeof EventCapacitySchema>;
```

Use generated Prisma/Zod schemas in repositories and API-adjacent DTO composition when the shape is intentionally persistence-like.

## Services

Application services are classes with constructor-injected repository dependencies. They are added when an operation has real workflow orchestration, not for every endpoint by default.

Command-style workflows usually go through services. Boring read endpoints may call repositories directly from `api/` as long as the router stays thin and avoids business decisions. Business reads that combine policy, attendee-specific state, or multiple repositories should use a service.

Service command schemas, output schemas, use-case interfaces, and command result types live under a service-specific folder such as `services/registration/commands.ts`. The service implementation lives beside them as `service.ts`, tests live beside the service as `service.test.ts`, and external imports use the service folder barrel at `services/registration/index.ts`.

```ts
export interface CreateEventUseCase {
  createEvent(input: CreateEventInput): Promise<CreateEventOutput>;
}

export class EventService implements CreateEventUseCase {
  constructor(private readonly repositories: EventServiceRepositories) {}
}

export class RegistrationService
  implements
    RegisterForEventUseCase,
    CancelRegistrationUseCase,
    LeaveWaitlistUseCase
{
  constructor(private readonly repositories: RegistrationServiceRepositories) {}
}
```

Each service owns its specific input schema, output schema, result type, and repository dependency type. Shared business concepts stay in `domain/`.

Expected business outcomes are returned as typed response states, not thrown as tRPC errors.

```ts
export const RegisterForEventOutputSchema = z.discriminatedUnion("status", [
  z.object({
    status: z.literal("registered"),
    registration: RegistrationSummarySchema,
    events: z.array(EventRegistrationEventSchema),
  }),
  z.object({
    status: z.literal("waitlisted"),
    waitlistEntry: WaitlistEntrySummarySchema,
    events: z.array(EventRegistrationEventSchema),
  }),
  z.object({
    status: z.literal("rejected"),
    reason: RegisterForEventRejectionReasonSchema,
    events: z.array(EventRegistrationEventSchema),
  }),
]);
```

Throw only for system failures, authorization failures, permission failures, or unexpected states.

## Repositories, Adapters, And Transactions

Repository contracts are named after feature concepts, such as `EventRepository` and `RegistrationRepository`, but their methods should be shaped by workflows rather than generic CRUD. Services depend on the narrow subset of repository methods they need, for example through `Pick<EventRepository, "findRegistrationSnapshot">`, so the repository name stays familiar without turning each service into a broad persistence client.

Reusable repository contracts live in concept-specific folders under `repositories/`. Service files define only the narrowed dependency composition they consume.

Concrete outbound adapters live beside the repository contract they implement. Prisma adapters expose factories for service dependencies:

```txt
src/features/events/repositories/
  event/
    index.ts
    repository.ts
    adapters/
      prisma.ts
      prisma-mappers.ts
  registration/
    index.ts
    repository.ts
    adapters/
      prisma.ts
      prisma-mappers.ts
```

```ts
const registrationService = new RegistrationService({
  events: createPrismaEventRepository(db),
  registrations: createPrismaRegistrationRepository(db),
});

const eventService = new EventService({
  events: createPrismaEventRepository(db),
});
```

Services own transaction boundaries through repository dependencies. Prisma transaction clients stay inside repository adapters.

## API

tRPC remains the primary API layer. Routers live inside feature slices and stay thin:

- parse input with use-case schemas,
- derive the actor from auth/session context,
- construct repository dependencies,
- call the service,
- return typed output states.

Root API composition only mounts slice routers.

Cross-feature reactions should use domain-event-shaped outputs rather than direct service-to-service calls. For this template, an events service can return events such as `WaitlistPromoted`, and the API layer may dispatch them in-process to `notifications/` after the workflow succeeds. Notification delivery failure must not roll back a successful registration outcome. Production applications can replace that in-process dispatch with an outbox or message bus without changing the event-registration service contract.

## UI

Feature UI lives with the slice:

```txt
src/features/events/ui/
  EventsPage.tsx
  EventsView.tsx
  components/
    EventCard.tsx
  hooks/
    use-events-actions.ts
```

Use role-based suffixes at page boundaries:

- `EventsPage.tsx` for container/page orchestration,
- `EventsView.tsx` for presentational screen layout,
- domain-specific names for child components.

Shared shadcn-style primitives live in `src/features/shared/components/ui`.

## Auth

Better Auth is infrastructure and lives under `src/server/auth`. Domain and service code receive an `Actor` or explicit domain identity, not Better Auth session objects.

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

Use Vitest for domain and service tests. These tests should run without Next.js, tRPC, Better Auth, Prisma, or a database.

```txt
src/features/events/domain/tests/registration.test.ts
src/features/events/services/event/service.test.ts
src/features/events/services/registration/service.test.ts
```

The architecture should make use-case tests fast and dependency-light.
