import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutAccountsInputObjectSchema as UserCreateNestedOneWithoutAccountsInputObjectSchema } from './UserCreateNestedOneWithoutAccountsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  accountId: z.string(),
  providerId: z.string(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  idToken: z.string().optional().nullable(),
  accessTokenExpiresAt: z.coerce.date().optional().nullable(),
  refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
  scope: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputObjectSchema)
}).strict();
export const AccountCreateInputObjectSchema: z.ZodType<Prisma.AccountCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountCreateInput>;
export const AccountCreateInputObjectZodSchema = makeSchema();
