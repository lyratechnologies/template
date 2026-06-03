import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VerificationCountOrderByAggregateInputObjectSchema as VerificationCountOrderByAggregateInputObjectSchema } from './VerificationCountOrderByAggregateInput.schema';
import { VerificationMaxOrderByAggregateInputObjectSchema as VerificationMaxOrderByAggregateInputObjectSchema } from './VerificationMaxOrderByAggregateInput.schema';
import { VerificationMinOrderByAggregateInputObjectSchema as VerificationMinOrderByAggregateInputObjectSchema } from './VerificationMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  identifier: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => VerificationCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => VerificationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => VerificationMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const VerificationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.VerificationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.VerificationOrderByWithAggregationInput>;
export const VerificationOrderByWithAggregationInputObjectZodSchema = makeSchema();
