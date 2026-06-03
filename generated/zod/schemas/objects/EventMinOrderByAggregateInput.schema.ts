import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  startsAt: SortOrderSchema.optional(),
  capacity: SortOrderSchema.optional(),
  registrationOpensAt: SortOrderSchema.optional(),
  registrationClosesAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const EventMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EventMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventMinOrderByAggregateInput>;
export const EventMinOrderByAggregateInputObjectZodSchema = makeSchema();
