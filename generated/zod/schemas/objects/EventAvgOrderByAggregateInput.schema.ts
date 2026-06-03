import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  capacity: SortOrderSchema.optional()
}).strict();
export const EventAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EventAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventAvgOrderByAggregateInput>;
export const EventAvgOrderByAggregateInputObjectZodSchema = makeSchema();
