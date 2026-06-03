import { readdirSync } from "node:fs";
import nextVitals from "eslint-config-next/core-web-vitals";
import tseslint from "typescript-eslint";

const featureNames = readdirSync(new URL("./src/features", import.meta.url), {
  withFileTypes: true,
})
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

/** @type {import("typescript-eslint").ConfigWithExtends[]} */
const featureBarrelImportRestrictions = featureNames.map((featureName) => ({
  files: [
    `src/features/${featureName}/**/*.ts`,
    `src/features/${featureName}/**/*.tsx`,
  ],
  rules: {
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "..",
            message: `Do not import the ${featureName} feature barrel from inside ${featureName}. Import the concrete module instead.`,
          },
          {
            name: "~/features/" + featureName,
            message: `Do not import the ${featureName} feature barrel from inside ${featureName}. Import the concrete module instead.`,
          },
        ],
      },
    ],
  },
}));

/** @type {import("typescript-eslint").ConfigWithExtends[]} */
const cleanArchitectureImportRestrictions = featureNames.flatMap(
  (featureName) => [
    {
      files: [
        `src/features/${featureName}/domain/**/*.ts`,
        `src/features/${featureName}/domain/**/*.tsx`,
      ],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            paths: [
              {
                name: "react",
                message:
                  "Domain code must stay framework-independent. Move React usage to ui or shared UI.",
              },
              {
                name: "next",
                message:
                  "Domain code must stay framework-independent. Move Next.js usage to app, api, ui, or infrastructure.",
              },
              {
                name: "@trpc/server",
                message:
                  "Domain code must not depend on transport concerns. Keep tRPC in api.",
              },
              {
                name: "@trpc/client",
                message:
                  "Domain code must not depend on transport concerns. Keep tRPC in api or ui.",
              },
              {
                name: "@tanstack/react-query",
                message:
                  "Domain code must not depend on client state libraries. Keep React Query in ui/shared UI.",
              },
              {
                name: "better-auth",
                message:
                  "Domain code must not depend on auth infrastructure. Pass explicit domain identities instead.",
              },
              {
                name: "generated/prisma/client",
                message:
                  "Domain code must not depend on generated persistence types. Map persistence data in repositories.",
              },
            ],
            patterns: [
              {
                group: [
                  "../api/**",
                  "../adapters/**",
                  "../repositories/**",
                  "../services/**",
                  "../ui/**",
                  "~/server/**",
                  "~/trpc/**",
                  "generated/**",
                  "@prisma/**",
                  "next/**",
                  "react-dom/**",
                ],
                message:
                  "Domain code is the innermost layer. It may import sibling domain modules and framework-free libraries only.",
              },
            ],
          },
        ],
      },
    },
    {
      files: [
        `src/features/${featureName}/services/**/*.ts`,
        `src/features/${featureName}/services/**/*.tsx`,
      ],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            paths: [
              {
                name: "react",
                message:
                  "Services must stay UI-independent. Move React usage to ui.",
              },
              {
                name: "@tanstack/react-query",
                message:
                  "Services must stay UI-independent. Move React Query usage to ui/shared UI.",
              },
              {
                name: "@trpc/server",
                message:
                  "Services must not depend on transport concerns. Keep tRPC in api.",
              },
              {
                name: "@trpc/client",
                message:
                  "Services must not depend on transport concerns. Keep tRPC in api or ui.",
              },
              {
                name: "better-auth",
                message:
                  "Services must not depend on auth infrastructure. Pass explicit actor or attendee identity instead.",
              },
              {
                name: "generated/prisma/client",
                message:
                  "Services must depend on repository contracts, not generated persistence types.",
              },
            ],
            patterns: [
              {
                group: [
                  "../api/**",
                  "../adapters/**",
                  "../ui/**",
                  "~/server/**",
                  "~/trpc/**",
                  "generated/**",
                  "@prisma/**",
                  "next/**",
                  "react-dom/**",
                ],
                message:
                  "Services orchestrate use cases. They may import domain modules and repository contracts, but not UI, transport, or infrastructure.",
              },
            ],
          },
        ],
      },
    },
    {
      files: [
        `src/features/${featureName}/repositories/**/*.ts`,
        `src/features/${featureName}/repositories/**/*.tsx`,
      ],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            paths: [
              {
                name: "react",
                message:
                  "Repositories must stay UI-independent. Move React usage to ui.",
              },
              {
                name: "@tanstack/react-query",
                message:
                  "Repositories must stay UI-independent. Move React Query usage to ui/shared UI.",
              },
              {
                name: "@trpc/server",
                message:
                  "Repositories must not depend on transport concerns. Keep tRPC in api.",
              },
              {
                name: "@trpc/client",
                message:
                  "Repositories must not depend on transport concerns. Keep tRPC in api or ui.",
              },
              {
                name: "better-auth",
                message:
                  "Repositories must not depend on auth infrastructure. Pass explicit IDs from services/api.",
              },
            ],
            patterns: [
              {
                group: [
                  "../api/**",
                  "../adapters/**",
                  "../services/**",
                  "../ui/**",
                  "~/server/api/**",
                  "~/server/auth/**",
                  "~/trpc/**",
                  "next/**",
                  "react-dom/**",
                ],
                message:
                  "Repositories are persistence contracts. They may import domain modules, but not adapters, services, API, UI, or infrastructure.",
              },
            ],
          },
        ],
      },
    },
    {
      files: [
        `src/features/${featureName}/adapters/**/*.ts`,
        `src/features/${featureName}/adapters/**/*.tsx`,
      ],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            paths: [
              {
                name: "react",
                message:
                  "Adapters must stay UI-independent. Move React usage to ui.",
              },
              {
                name: "@tanstack/react-query",
                message:
                  "Adapters must stay UI-independent. Move React Query usage to ui/shared UI.",
              },
              {
                name: "@trpc/server",
                message:
                  "Adapters must not depend on transport concerns. Keep tRPC in api.",
              },
              {
                name: "@trpc/client",
                message:
                  "Adapters must not depend on transport concerns. Keep tRPC in api or ui.",
              },
              {
                name: "better-auth",
                message:
                  "Adapters must not depend on auth infrastructure. Pass explicit IDs from services/api.",
              },
            ],
            patterns: [
              {
                group: [
                  "../api/**",
                  "../services/**",
                  "../ui/**",
                  "~/server/api/**",
                  "~/server/auth/**",
                  "~/trpc/**",
                  "next/**",
                  "react-dom/**",
                ],
                message:
                  "Adapters implement outbound infrastructure. They may import domain modules, repository contracts, and persistence libraries only.",
              },
            ],
          },
        ],
      },
    },
    {
      files: [
        `src/features/${featureName}/api/**/*.ts`,
        `src/features/${featureName}/api/**/*.tsx`,
      ],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            paths: [
              {
                name: "react",
                message:
                  "API routers must stay UI-independent. Move React usage to ui.",
              },
              {
                name: "@tanstack/react-query",
                message:
                  "API routers must stay UI-independent. Move React Query usage to ui/shared UI.",
              },
            ],
            patterns: [
              {
                group: ["../ui/**", "react-dom/**"],
                message:
                  "API routers translate transport to application services. They must not import UI.",
              },
            ],
          },
        ],
      },
    },
    {
      files: [
        `src/features/${featureName}/ui/**/*.ts`,
        `src/features/${featureName}/ui/**/*.tsx`,
      ],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            patterns: [
              {
                group: [
                  "../repositories/**",
                  "../adapters/**",
                  "~/server/db",
                  "~/server/db/**",
                  "generated/**",
                  "@prisma/**",
                ],
                message:
                  "UI must not import persistence directly. Go through API/server actions or feature services at a server boundary.",
              },
            ],
          },
        ],
      },
    },
  ]
);

export default tseslint.config(
  {
    ignores: [".next/**", "generated/**"],
  },
  ...nextVitals,
  {
    files: ["**/*.ts", "**/*.tsx"],
    extends: [
      ...tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    rules: {
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
    },
  },
  ...featureBarrelImportRestrictions,
  ...cleanArchitectureImportRestrictions,
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  }
);
