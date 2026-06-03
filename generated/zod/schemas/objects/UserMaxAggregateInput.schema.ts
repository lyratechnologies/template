import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  email: z.literal(true).optional(),
  emailVerified: z.literal(true).optional(),
  image: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const UserMaxAggregateInputObjectSchema: z.ZodType<Prisma.UserMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserMaxAggregateInputType>;
export const UserMaxAggregateInputObjectZodSchema = makeSchema();
