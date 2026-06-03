import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const accountscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AccountScalarWhereInputObjectSchema), z.lazy(() => AccountScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AccountScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountScalarWhereInputObjectSchema), z.lazy(() => AccountScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  accountId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  providerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  accessToken: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  refreshToken: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  idToken: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  accessTokenExpiresAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  refreshTokenExpiresAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  scope: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  password: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AccountScalarWhereInputObjectSchema: z.ZodType<Prisma.AccountScalarWhereInput> = accountscalarwhereinputSchema as unknown as z.ZodType<Prisma.AccountScalarWhereInput>;
export const AccountScalarWhereInputObjectZodSchema = accountscalarwhereinputSchema;
