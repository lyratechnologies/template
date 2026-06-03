import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  position: z.number().int(),
  promotedAt: z.coerce.date().optional().nullable(),
  cancelledAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  attendeeId: z.string()
}).strict();
export const WaitlistEntryCreateManyEventInputObjectSchema: z.ZodType<Prisma.WaitlistEntryCreateManyEventInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryCreateManyEventInput>;
export const WaitlistEntryCreateManyEventInputObjectZodSchema = makeSchema();
