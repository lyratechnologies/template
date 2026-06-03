import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationCreateNestedManyWithoutEventInputObjectSchema as RegistrationCreateNestedManyWithoutEventInputObjectSchema } from './RegistrationCreateNestedManyWithoutEventInput.schema'

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
  registrations: z.lazy(() => RegistrationCreateNestedManyWithoutEventInputObjectSchema).optional()
}).strict();
export const EventCreateWithoutWaitlistEntriesInputObjectSchema: z.ZodType<Prisma.EventCreateWithoutWaitlistEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateWithoutWaitlistEntriesInput>;
export const EventCreateWithoutWaitlistEntriesInputObjectZodSchema = makeSchema();
