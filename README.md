# Lyra Template

This is a Next.js template for the Event Registration demo domain. It uses Bun for package management, Better Auth for authentication, Prisma for persistence, tRPC for API composition, Tailwind CSS for styling, and Zod for runtime schemas.

The target architecture is documented in:

- [CONTEXT.md](CONTEXT.md)
- [docs/architecture.md](docs/architecture.md)
- [docs/adr/0001-adopt-full-stack-vertical-slices-with-clean-architecture.md](docs/adr/0001-adopt-full-stack-vertical-slices-with-clean-architecture.md)

## Tooling

Use Bun for dependency management and scripts.

```bash
bun install
bun run dev
```

Common commands:

```bash
bun run db:generate
bun run db:push
bun run db:migrate
bun run test
bun run typecheck
bun run lint
bun run build
```

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

## Database Generation

Prisma is configured through [prisma.config.ts](prisma.config.ts), with schema files under [prisma](prisma). The Prisma client and Prisma Zod schemas are generated into committed root-level output directories:

```txt
generated/
  prisma/
  zod/
```

Regenerate them after schema changes:

```bash
bun run db:generate
```

Imports should use the generated output, for example:

```ts
import { PrismaClient } from "generated/prisma/client";
import { UserWhereInputObjectSchema } from "generated/zod/schemas/objects/UserWhereInput.schema";
```

The `generated/*` TypeScript alias is configured in [tsconfig.json](tsconfig.json).

## Auth

Better Auth infrastructure lives under [src/server/auth](src/server/auth). The API route is mounted at [src/app/api/auth/[...all]/route.ts](src/app/api/auth/%5B...all%5D/route.ts).

Domain and service code should receive actor or domain identity types, not Better Auth session objects.
