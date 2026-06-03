import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationUncheckedCreateNestedManyWithoutEventInputObjectSchema as RegistrationUncheckedCreateNestedManyWithoutEventInputObjectSchema } from './RegistrationUncheckedCreateNestedManyWithoutEventInput.schema';
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
  registrations: z.lazy(() => RegistrationUncheckedCreateNestedManyWithoutEventInputObjectSchema).optional(),
  waitlistEntries: z.lazy(() => WaitlistEntryUncheckedCreateNestedManyWithoutEventInputObjectSchema).optional()
}).strict();
export const EventUncheckedCreateInputObjectSchema: z.ZodType<Prisma.EventUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUncheckedCreateInput>;
export const EventUncheckedCreateInputObjectZodSchema = makeSchema();
