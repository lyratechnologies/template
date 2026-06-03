import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  position: z.number().int(),
  promotedAt: z.coerce.date().optional().nullable(),
  cancelledAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  eventId: z.string()
}).strict();
export const WaitlistEntryUncheckedCreateWithoutAttendeeInputObjectSchema: z.ZodType<Prisma.WaitlistEntryUncheckedCreateWithoutAttendeeInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryUncheckedCreateWithoutAttendeeInput>;
export const WaitlistEntryUncheckedCreateWithoutAttendeeInputObjectZodSchema = makeSchema();
