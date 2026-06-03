import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventCreateNestedOneWithoutWaitlistEntriesInputObjectSchema as EventCreateNestedOneWithoutWaitlistEntriesInputObjectSchema } from './EventCreateNestedOneWithoutWaitlistEntriesInput.schema';
import { UserCreateNestedOneWithoutWaitlistEntriesInputObjectSchema as UserCreateNestedOneWithoutWaitlistEntriesInputObjectSchema } from './UserCreateNestedOneWithoutWaitlistEntriesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  position: z.number().int(),
  promotedAt: z.coerce.date().optional().nullable(),
  cancelledAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  event: z.lazy(() => EventCreateNestedOneWithoutWaitlistEntriesInputObjectSchema),
  attendee: z.lazy(() => UserCreateNestedOneWithoutWaitlistEntriesInputObjectSchema)
}).strict();
export const WaitlistEntryCreateInputObjectSchema: z.ZodType<Prisma.WaitlistEntryCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryCreateInput>;
export const WaitlistEntryCreateInputObjectZodSchema = makeSchema();
