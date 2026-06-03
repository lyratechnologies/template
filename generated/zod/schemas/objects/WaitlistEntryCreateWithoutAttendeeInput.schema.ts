import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventCreateNestedOneWithoutWaitlistEntriesInputObjectSchema as EventCreateNestedOneWithoutWaitlistEntriesInputObjectSchema } from './EventCreateNestedOneWithoutWaitlistEntriesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  position: z.number().int(),
  promotedAt: z.coerce.date().optional().nullable(),
  cancelledAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  event: z.lazy(() => EventCreateNestedOneWithoutWaitlistEntriesInputObjectSchema)
}).strict();
export const WaitlistEntryCreateWithoutAttendeeInputObjectSchema: z.ZodType<Prisma.WaitlistEntryCreateWithoutAttendeeInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryCreateWithoutAttendeeInput>;
export const WaitlistEntryCreateWithoutAttendeeInputObjectZodSchema = makeSchema();
