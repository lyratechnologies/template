import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  capacity: SortOrderSchema.optional()
}).strict();
export const EventSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EventSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventSumOrderByAggregateInput>;
export const EventSumOrderByAggregateInputObjectZodSchema = makeSchema();
