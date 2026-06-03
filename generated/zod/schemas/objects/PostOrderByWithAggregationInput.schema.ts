import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PostCountOrderByAggregateInputObjectSchema as PostCountOrderByAggregateInputObjectSchema } from './PostCountOrderByAggregateInput.schema';
import { PostAvgOrderByAggregateInputObjectSchema as PostAvgOrderByAggregateInputObjectSchema } from './PostAvgOrderByAggregateInput.schema';
import { PostMaxOrderByAggregateInputObjectSchema as PostMaxOrderByAggregateInputObjectSchema } from './PostMaxOrderByAggregateInput.schema';
import { PostMinOrderByAggregateInputObjectSchema as PostMinOrderByAggregateInputObjectSchema } from './PostMinOrderByAggregateInput.schema';
import { PostSumOrderByAggregateInputObjectSchema as PostSumOrderByAggregateInputObjectSchema } from './PostSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  _count: z.lazy(() => PostCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => PostAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PostMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PostMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => PostSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PostOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PostOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PostOrderByWithAggregationInput>;
export const PostOrderByWithAggregationInputObjectZodSchema = makeSchema();
