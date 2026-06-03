import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationCreateNestedManyWithoutEventInputObjectSchema as RegistrationCreateNestedManyWithoutEventInputObjectSchema } from './RegistrationCreateNestedManyWithoutEventInput.schema';
import { WaitlistEntryCreateNestedManyWithoutEventInputObjectSchema as WaitlistEntryCreateNestedManyWithoutEventInputObjectSchema } from './WaitlistEntryCreateNestedManyWithoutEventInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  startsAt: z.coerce.date(),
  capacity: z.number().int(),
  registrationOpensAt: z.coerce.date(),
  registrationClosesAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  registrations: z.lazy(() => RegistrationCreateNestedManyWithoutEventInputObjectSchema).optional(),
  waitlistEntries: z.lazy(() => WaitlistEntryCreateNestedManyWithoutEventInputObjectSchema).optional()
}).strict();
export const EventCreateInputObjectSchema: z.ZodType<Prisma.EventCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateInput>;
export const EventCreateInputObjectZodSchema = makeSchema();
