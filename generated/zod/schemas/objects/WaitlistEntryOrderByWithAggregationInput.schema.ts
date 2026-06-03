import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { WaitlistEntryCountOrderByAggregateInputObjectSchema as WaitlistEntryCountOrderByAggregateInputObjectSchema } from './WaitlistEntryCountOrderByAggregateInput.schema';
import { WaitlistEntryAvgOrderByAggregateInputObjectSchema as WaitlistEntryAvgOrderByAggregateInputObjectSchema } from './WaitlistEntryAvgOrderByAggregateInput.schema';
import { WaitlistEntryMaxOrderByAggregateInputObjectSchema as WaitlistEntryMaxOrderByAggregateInputObjectSchema } from './WaitlistEntryMaxOrderByAggregateInput.schema';
import { WaitlistEntryMinOrderByAggregateInputObjectSchema as WaitlistEntryMinOrderByAggregateInputObjectSchema } from './WaitlistEntryMinOrderByAggregateInput.schema';
import { WaitlistEntrySumOrderByAggregateInputObjectSchema as WaitlistEntrySumOrderByAggregateInputObjectSchema } from './WaitlistEntrySumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  promotedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cancelledAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  eventId: SortOrderSchema.optional(),
  attendeeId: SortOrderSchema.optional(),
  _count: z.lazy(() => WaitlistEntryCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => WaitlistEntryAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WaitlistEntryMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WaitlistEntryMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => WaitlistEntrySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const WaitlistEntryOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.WaitlistEntryOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryOrderByWithAggregationInput>;
export const WaitlistEntryOrderByWithAggregationInputObjectZodSchema = makeSchema();
