import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  identifier: z.literal(true).optional(),
  value: z.literal(true).optional(),
  expiresAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const VerificationMinAggregateInputObjectSchema: z.ZodType<Prisma.VerificationMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VerificationMinAggregateInputType>;
export const VerificationMinAggregateInputObjectZodSchema = makeSchema();
