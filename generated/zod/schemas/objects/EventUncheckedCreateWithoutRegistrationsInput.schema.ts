import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WaitlistEntryUncheckedCreateNestedManyWithoutEventInputObjectSchema as WaitlistEntryUncheckedCreateNestedManyWithoutEventInputObjectSchema } from './WaitlistEntryUncheckedCreateNestedManyWithoutEventInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  startsAt: z.coerce.date(),
  capacity: z.number().int(),
  registrationOpensAt: z.coerce.date(),
  registrationClosesAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  waitlistEntries: z.lazy(() => WaitlistEntryUncheckedCreateNestedManyWithoutEventInputObjectSchema).optional()
}).strict();
export const EventUncheckedCreateWithoutRegistrationsInputObjectSchema: z.ZodType<Prisma.EventUncheckedCreateWithoutRegistrationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUncheckedCreateWithoutRegistrationsInput>;
export const EventUncheckedCreateWithoutRegistrationsInputObjectZodSchema = makeSchema();
