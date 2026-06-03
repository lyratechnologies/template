import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  position: z.literal(true).optional(),
  promotedAt: z.literal(true).optional(),
  cancelledAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  eventId: z.literal(true).optional(),
  attendeeId: z.literal(true).optional()
}).strict();
export const WaitlistEntryMinAggregateInputObjectSchema: z.ZodType<Prisma.WaitlistEntryMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryMinAggregateInputType>;
export const WaitlistEntryMinAggregateInputObjectZodSchema = makeSchema();
