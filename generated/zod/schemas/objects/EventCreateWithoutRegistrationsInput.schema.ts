import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
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
  updatedAt: z.coerce.date().optional(),
  waitlistEntries: z.lazy(() => WaitlistEntryCreateNestedManyWithoutEventInputObjectSchema).optional()
}).strict();
export const EventCreateWithoutRegistrationsInputObjectSchema: z.ZodType<Prisma.EventCreateWithoutRegistrationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateWithoutRegistrationsInput>;
export const EventCreateWithoutRegistrationsInputObjectZodSchema = makeSchema();
