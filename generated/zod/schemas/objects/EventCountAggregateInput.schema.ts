import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  description: z.literal(true).optional(),
  startsAt: z.literal(true).optional(),
  capacity: z.literal(true).optional(),
  registrationOpensAt: z.literal(true).optional(),
  registrationClosesAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const EventCountAggregateInputObjectSchema: z.ZodType<Prisma.EventCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EventCountAggregateInputType>;
export const EventCountAggregateInputObjectZodSchema = makeSchema();
