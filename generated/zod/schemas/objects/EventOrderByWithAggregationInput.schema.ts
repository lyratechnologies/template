import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EventCountOrderByAggregateInputObjectSchema as EventCountOrderByAggregateInputObjectSchema } from './EventCountOrderByAggregateInput.schema';
import { EventAvgOrderByAggregateInputObjectSchema as EventAvgOrderByAggregateInputObjectSchema } from './EventAvgOrderByAggregateInput.schema';
import { EventMaxOrderByAggregateInputObjectSchema as EventMaxOrderByAggregateInputObjectSchema } from './EventMaxOrderByAggregateInput.schema';
import { EventMinOrderByAggregateInputObjectSchema as EventMinOrderByAggregateInputObjectSchema } from './EventMinOrderByAggregateInput.schema';
import { EventSumOrderByAggregateInputObjectSchema as EventSumOrderByAggregateInputObjectSchema } from './EventSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  startsAt: SortOrderSchema.optional(),
  capacity: SortOrderSchema.optional(),
  registrationOpensAt: SortOrderSchema.optional(),
  registrationClosesAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => EventCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => EventAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => EventMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => EventMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => EventSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const EventOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.EventOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.EventOrderByWithAggregationInput>;
export const EventOrderByWithAggregationInputObjectZodSchema = makeSchema();
