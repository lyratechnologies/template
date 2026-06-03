import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const WaitlistEntryOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.WaitlistEntryOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryOrderByRelationAggregateInput>;
export const WaitlistEntryOrderByRelationAggregateInputObjectZodSchema = makeSchema();
