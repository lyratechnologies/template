import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  identifier: z.literal(true).optional(),
  value: z.literal(true).optional(),
  expiresAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const VerificationCountAggregateInputObjectSchema: z.ZodType<Prisma.VerificationCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VerificationCountAggregateInputType>;
export const VerificationCountAggregateInputObjectZodSchema = makeSchema();
