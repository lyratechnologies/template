import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationUncheckedCreateNestedManyWithoutEventInputObjectSchema as RegistrationUncheckedCreateNestedManyWithoutEventInputObjectSchema } from './RegistrationUncheckedCreateNestedManyWithoutEventInput.schema'

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
  registrations: z.lazy(() => RegistrationUncheckedCreateNestedManyWithoutEventInputObjectSchema).optional()
}).strict();
export const EventUncheckedCreateWithoutWaitlistEntriesInputObjectSchema: z.ZodType<Prisma.EventUncheckedCreateWithoutWaitlistEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUncheckedCreateWithoutWaitlistEntriesInput>;
export const EventUncheckedCreateWithoutWaitlistEntriesInputObjectZodSchema = makeSchema();
