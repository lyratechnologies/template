import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  token: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  ipAddress: SortOrderSchema.optional(),
  userAgent: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const SessionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionMaxOrderByAggregateInput>;
export const SessionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
