import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const sessionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SessionWhereInputObjectSchema), z.lazy(() => SessionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SessionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SessionWhereInputObjectSchema), z.lazy(() => SessionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  expiresAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  token: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  ipAddress: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  userAgent: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const SessionWhereInputObjectSchema: z.ZodType<Prisma.SessionWhereInput> = sessionwhereinputSchema as unknown as z.ZodType<Prisma.SessionWhereInput>;
export const SessionWhereInputObjectZodSchema = sessionwhereinputSchema;
