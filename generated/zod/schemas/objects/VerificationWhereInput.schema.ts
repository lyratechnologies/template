import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const verificationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => VerificationWhereInputObjectSchema), z.lazy(() => VerificationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VerificationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VerificationWhereInputObjectSchema), z.lazy(() => VerificationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  identifier: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  expiresAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const VerificationWhereInputObjectSchema: z.ZodType<Prisma.VerificationWhereInput> = verificationwhereinputSchema as unknown as z.ZodType<Prisma.VerificationWhereInput>;
export const VerificationWhereInputObjectZodSchema = verificationwhereinputSchema;
