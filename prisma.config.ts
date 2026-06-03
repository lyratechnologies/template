import "dotenv/config";

import { defineConfig } from "prisma/config";

const databaseUrl =
  process.env.DATABASE_URL ??
  "file:./dev.db";

export default defineConfig({
  schema: "prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: databaseUrl,
  },
});
