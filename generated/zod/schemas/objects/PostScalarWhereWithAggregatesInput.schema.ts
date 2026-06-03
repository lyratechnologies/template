import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const postscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  createdById: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const PostScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PostScalarWhereWithAggregatesInput> = postscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PostScalarWhereWithAggregatesInput>;
export const PostScalarWhereWithAggregatesInputObjectZodSchema = postscalarwherewithaggregatesinputSchema;
