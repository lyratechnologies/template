import { readdirSync } from "node:fs";
import nextVitals from "eslint-config-next/core-web-vitals";
import tseslint from "typescript-eslint";

const featureNames = readdirSync(new URL("./src/features", import.meta.url), {
  withFileTypes: true,
})
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

const serviceFolderNamesByFeature = Object.fromEntries(
  featureNames.map((featureName) => {
    try {
      return [
        featureName,
        readdirSync(
          new URL(`./src/features/${featureName}/services`, import.meta.url),
          { withFileTypes: true }
        )
          .filter((entry) => entry.isDirectory())
          .map((entry) => entry.name),
      ];
    } catch {
      return [featureName, []];
    }
  })
);

const repositoryFolderNamesByFeature = Object.fromEntries(
  featureNames.map((featureName) => {
    try {
      return [
        featureName,
        readdirSync(
          new URL(
            `./src/features/${featureName}/repositories`,
            import.meta.url
          ),
          { withFileTypes: true }
        )
          .filter((entry) => entry.isDirectory())
          .map((entry) => entry.name),
      ];
    } catch {
      return [featureName, []];
    }
  })
);

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
                  "../../api/**",
                  "../repositories/**/adapters/**",
                  "../../repositories/**/adapters/**",
                  "../ui/**",
                  "../../ui/**",
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
        `src/features/${featureName}/repositories/**/repository.ts`,
        `src/features/${featureName}/repositories/**/index.ts`,
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
                  "./adapters/**",
                  "../*/adapters/**",
                  "../../api/**",
                  "../../services/**",
                  "../../ui/**",
                  `~/features/${featureName}/api/**`,
                  `~/features/${featureName}/repositories/**/adapters/**`,
                  `~/features/${featureName}/services/**`,
                  `~/features/${featureName}/ui/**`,
                  "~/server/api/**",
                  "~/server/auth/**",
                  "~/trpc/**",
                  "next/**",
                  "react-dom/**",
                  "generated/**",
                  "@prisma/**",
                ],
                message:
                  "Repository contracts may import domain modules, but not adapters, services, API, UI, generated persistence, or infrastructure.",
              },
            ],
          },
        ],
      },
    },
    {
      files: [
        `src/features/${featureName}/repositories/**/adapters/**/*.ts`,
        `src/features/${featureName}/repositories/**/adapters/**/*.tsx`,
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
                  "../../../api/**",
                  "../../../services/**",
                  "../../../ui/**",
                  `~/features/${featureName}/api/**`,
                  `~/features/${featureName}/services/**`,
                  `~/features/${featureName}/ui/**`,
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
                  "../repositories/**/adapters/**",
                  "../../repositories/**",
                  "../../repositories/**/adapters/**",
                  `~/features/${featureName}/repositories/**`,
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

/** @type {import("typescript-eslint").ConfigWithExtends[]} */
const serviceBarrelImportRestrictions = featureNames.flatMap((featureName) =>
  (serviceFolderNamesByFeature[featureName] ?? []).map((serviceFolderName) => ({
    files: [
      `src/features/${featureName}/**/*.ts`,
      `src/features/${featureName}/**/*.tsx`,
      `!src/features/${featureName}/services/${serviceFolderName}/**/*.ts`,
      `!src/features/${featureName}/services/${serviceFolderName}/**/*.tsx`,
    ],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                `../services/${serviceFolderName}/*`,
                `../../services/${serviceFolderName}/*`,
                `~/features/${featureName}/services/${serviceFolderName}/*`,
              ],
              message: `Import ${serviceFolderName} service exports from its folder barrel instead of deep service files.`,
            },
          ],
        },
      ],
    },
  }))
);

/** @type {import("typescript-eslint").ConfigWithExtends[]} */
const repositoryBarrelImportRestrictions = featureNames.flatMap((featureName) =>
  (repositoryFolderNamesByFeature[featureName] ?? []).map(
    (repositoryFolderName) => ({
      files: [
        `src/features/${featureName}/**/*.ts`,
        `src/features/${featureName}/**/*.tsx`,
        `!src/features/${featureName}/repositories/${repositoryFolderName}/**/*.ts`,
        `!src/features/${featureName}/repositories/${repositoryFolderName}/**/*.tsx`,
      ],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            patterns: [
              {
                group: [
                  `../repositories/${repositoryFolderName}/repository`,
                  `../../repositories/${repositoryFolderName}/repository`,
                  `~/features/${featureName}/repositories/${repositoryFolderName}/repository`,
                ],
                message: `Import ${repositoryFolderName} repository contracts from its folder barrel instead of deep repository files.`,
              },
            ],
          },
        ],
      },
    })
  )
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
  ...serviceBarrelImportRestrictions,
  ...repositoryBarrelImportRestrictions,
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
