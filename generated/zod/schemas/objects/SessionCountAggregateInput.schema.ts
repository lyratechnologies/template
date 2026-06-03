import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  expiresAt: z.literal(true).optional(),
  token: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  ipAddress: z.literal(true).optional(),
  userAgent: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const SessionCountAggregateInputObjectSchema: z.ZodType<Prisma.SessionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SessionCountAggregateInputType>;
export const SessionCountAggregateInputObjectZodSchema = makeSchema();
