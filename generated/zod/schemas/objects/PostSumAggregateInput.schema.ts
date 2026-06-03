import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const PostSumAggregateInputObjectSchema: z.ZodType<Prisma.PostSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PostSumAggregateInputType>;
export const PostSumAggregateInputObjectZodSchema = makeSchema();
