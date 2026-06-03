import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  position: SortOrderSchema.optional()
}).strict();
export const WaitlistEntrySumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WaitlistEntrySumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntrySumOrderByAggregateInput>;
export const WaitlistEntrySumOrderByAggregateInputObjectZodSchema = makeSchema();
