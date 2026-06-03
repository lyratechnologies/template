import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional()
}).strict();
export const PostCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PostCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCountOrderByAggregateInput>;
export const PostCountOrderByAggregateInputObjectZodSchema = makeSchema();
