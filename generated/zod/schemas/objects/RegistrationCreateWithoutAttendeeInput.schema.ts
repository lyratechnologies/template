import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationStatusSchema } from '../enums/RegistrationStatus.schema';
import { EventCreateNestedOneWithoutRegistrationsInputObjectSchema as EventCreateNestedOneWithoutRegistrationsInputObjectSchema } from './EventCreateNestedOneWithoutRegistrationsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  status: RegistrationStatusSchema.optional(),
  registeredAt: z.coerce.date().optional(),
  cancelledAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  event: z.lazy(() => EventCreateNestedOneWithoutRegistrationsInputObjectSchema)
}).strict();
export const RegistrationCreateWithoutAttendeeInputObjectSchema: z.ZodType<Prisma.RegistrationCreateWithoutAttendeeInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationCreateWithoutAttendeeInput>;
export const RegistrationCreateWithoutAttendeeInputObjectZodSchema = makeSchema();
