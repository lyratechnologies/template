# Adopt full-stack vertical slices with clean architecture

Status: accepted

We will structure the template around full-stack feature slices that own domain models, application use cases, API adapters, persistence adapters, and UI. This replaces conventional T3 layer folders and the current `src/types` plus `src/mappings` pattern because the template is meant to demonstrate scalable domain boundaries, explicit use-case contracts, and testable workflows rather than simple CRUD wiring.

## Consequences

- Feature behavior lives under `src/features/<feature>` instead of being split across global `types`, `mappings`, `services`, routers, and route-local component folders.
- Domain models remain business-owned and Zod-first; generated Prisma/Zod schemas support adapters but do not define domain language.
- Use cases are application service classes with constructor-injected repository contracts and typed output states.
- tRPC routers, repository-specific Prisma adapters, and React containers are adapters around those services.
- `src/app` becomes thin routing composition.
- Better Auth remains infrastructure under `src/server/auth`; domain code receives actor/domain identities rather than auth provider sessions.
- The template accepts more structure and mapping code in exchange for clearer dependency direction, faster use-case tests, and less type/schema drift.
