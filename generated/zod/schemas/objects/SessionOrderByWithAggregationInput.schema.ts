import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SessionCountOrderByAggregateInputObjectSchema as SessionCountOrderByAggregateInputObjectSchema } from './SessionCountOrderByAggregateInput.schema';
import { SessionMaxOrderByAggregateInputObjectSchema as SessionMaxOrderByAggregateInputObjectSchema } from './SessionMaxOrderByAggregateInput.schema';
import { SessionMinOrderByAggregateInputObjectSchema as SessionMinOrderByAggregateInputObjectSchema } from './SessionMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  token: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  ipAddress: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userAgent: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userId: SortOrderSchema.optional(),
  _count: z.lazy(() => SessionCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SessionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SessionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SessionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionOrderByWithAggregationInput>;
export const SessionOrderByWithAggregationInputObjectZodSchema = makeSchema();
