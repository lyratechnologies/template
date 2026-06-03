import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  accountId: z.boolean().optional(),
  providerId: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  accessToken: z.boolean().optional(),
  refreshToken: z.boolean().optional(),
  idToken: z.boolean().optional(),
  accessTokenExpiresAt: z.boolean().optional(),
  refreshTokenExpiresAt: z.boolean().optional(),
  scope: z.boolean().optional(),
  password: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const AccountSelectObjectSchema: z.ZodType<Prisma.AccountSelect> = makeSchema() as unknown as z.ZodType<Prisma.AccountSelect>;
export const AccountSelectObjectZodSchema = makeSchema();
