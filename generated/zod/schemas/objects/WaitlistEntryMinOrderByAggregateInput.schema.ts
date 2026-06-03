import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  promotedAt: SortOrderSchema.optional(),
  cancelledAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  eventId: SortOrderSchema.optional(),
  attendeeId: SortOrderSchema.optional()
}).strict();
export const WaitlistEntryMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WaitlistEntryMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryMinOrderByAggregateInput>;
export const WaitlistEntryMinOrderByAggregateInputObjectZodSchema = makeSchema();
