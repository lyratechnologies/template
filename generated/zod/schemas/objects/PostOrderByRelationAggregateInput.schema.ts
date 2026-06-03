import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const PostOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.PostOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PostOrderByRelationAggregateInput>;
export const PostOrderByRelationAggregateInputObjectZodSchema = makeSchema();
