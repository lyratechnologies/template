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
export const WaitlistEntryMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WaitlistEntryMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryMaxOrderByAggregateInput>;
export const WaitlistEntryMaxOrderByAggregateInputObjectZodSchema = makeSchema();
