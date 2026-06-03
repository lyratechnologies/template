import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  position: z.number().int(),
  promotedAt: z.coerce.date().optional().nullable(),
  cancelledAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  eventId: z.string(),
  attendeeId: z.string()
}).strict();
export const WaitlistEntryCreateManyInputObjectSchema: z.ZodType<Prisma.WaitlistEntryCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryCreateManyInput>;
export const WaitlistEntryCreateManyInputObjectZodSchema = makeSchema();
