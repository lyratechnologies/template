import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationStatusSchema } from '../enums/RegistrationStatus.schema';
import { EventCreateNestedOneWithoutRegistrationsInputObjectSchema as EventCreateNestedOneWithoutRegistrationsInputObjectSchema } from './EventCreateNestedOneWithoutRegistrationsInput.schema';
import { UserCreateNestedOneWithoutRegistrationsInputObjectSchema as UserCreateNestedOneWithoutRegistrationsInputObjectSchema } from './UserCreateNestedOneWithoutRegistrationsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  status: RegistrationStatusSchema.optional(),
  registeredAt: z.coerce.date().optional(),
  cancelledAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  event: z.lazy(() => EventCreateNestedOneWithoutRegistrationsInputObjectSchema),
  attendee: z.lazy(() => UserCreateNestedOneWithoutRegistrationsInputObjectSchema)
}).strict();
export const RegistrationCreateInputObjectSchema: z.ZodType<Prisma.RegistrationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationCreateInput>;
export const RegistrationCreateInputObjectZodSchema = makeSchema();
