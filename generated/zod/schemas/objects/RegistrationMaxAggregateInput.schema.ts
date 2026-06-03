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
export const RegistrationMaxAggregateInputObjectSchema: z.ZodType<Prisma.RegistrationMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationMaxAggregateInputType>;
export const RegistrationMaxAggregateInputObjectZodSchema = makeSchema();
