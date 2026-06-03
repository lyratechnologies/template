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
  attendeeId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const WaitlistEntryCountAggregateInputObjectSchema: z.ZodType<Prisma.WaitlistEntryCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryCountAggregateInputType>;
export const WaitlistEntryCountAggregateInputObjectZodSchema = makeSchema();
