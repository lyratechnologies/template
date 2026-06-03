import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const accountwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AccountWhereInputObjectSchema), z.lazy(() => AccountWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AccountWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountWhereInputObjectSchema), z.lazy(() => AccountWhereInputObjectSchema).array()]).optional(),
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
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const AccountWhereInputObjectSchema: z.ZodType<Prisma.AccountWhereInput> = accountwhereinputSchema as unknown as z.ZodType<Prisma.AccountWhereInput>;
export const AccountWhereInputObjectZodSchema = accountwhereinputSchema;
