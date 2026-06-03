import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutWaitlistEntriesInputObjectSchema as UserCreateNestedOneWithoutWaitlistEntriesInputObjectSchema } from './UserCreateNestedOneWithoutWaitlistEntriesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  position: z.number().int(),
  promotedAt: z.coerce.date().optional().nullable(),
  cancelledAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  attendee: z.lazy(() => UserCreateNestedOneWithoutWaitlistEntriesInputObjectSchema)
}).strict();
export const WaitlistEntryCreateWithoutEventInputObjectSchema: z.ZodType<Prisma.WaitlistEntryCreateWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryCreateWithoutEventInput>;
export const WaitlistEntryCreateWithoutEventInputObjectZodSchema = makeSchema();
