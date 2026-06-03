import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  status: z.literal(true).optional(),
  registeredAt: z.literal(true).optional(),
  cancelledAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  eventId: z.literal(true).optional(),
  attendeeId: z.literal(true).optional()
}).strict();
export const RegistrationMinAggregateInputObjectSchema: z.ZodType<Prisma.RegistrationMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationMinAggregateInputType>;
export const RegistrationMinAggregateInputObjectZodSchema = makeSchema();
