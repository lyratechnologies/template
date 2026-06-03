import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const PostOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PostOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PostOrderByWithRelationInput>;
export const PostOrderByWithRelationInputObjectZodSchema = makeSchema();
