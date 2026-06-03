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
  updatedAt: z.literal(true).optional()
}).strict();
export const EventMaxAggregateInputObjectSchema: z.ZodType<Prisma.EventMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EventMaxAggregateInputType>;
export const EventMaxAggregateInputObjectZodSchema = makeSchema();
