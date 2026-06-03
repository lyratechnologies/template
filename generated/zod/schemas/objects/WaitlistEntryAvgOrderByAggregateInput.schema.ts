import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  position: SortOrderSchema.optional()
}).strict();
export const WaitlistEntryAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WaitlistEntryAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryAvgOrderByAggregateInput>;
export const WaitlistEntryAvgOrderByAggregateInputObjectZodSchema = makeSchema();
