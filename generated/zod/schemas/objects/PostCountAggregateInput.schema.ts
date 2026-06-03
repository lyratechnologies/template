import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const PostCountAggregateInputObjectSchema: z.ZodType<Prisma.PostCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PostCountAggregateInputType>;
export const PostCountAggregateInputObjectZodSchema = makeSchema();
