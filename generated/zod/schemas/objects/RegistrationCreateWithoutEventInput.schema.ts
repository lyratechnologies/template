import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationStatusSchema } from '../enums/RegistrationStatus.schema';
import { UserCreateNestedOneWithoutRegistrationsInputObjectSchema as UserCreateNestedOneWithoutRegistrationsInputObjectSchema } from './UserCreateNestedOneWithoutRegistrationsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  status: RegistrationStatusSchema.optional(),
  registeredAt: z.coerce.date().optional(),
  cancelledAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  attendee: z.lazy(() => UserCreateNestedOneWithoutRegistrationsInputObjectSchema)
}).strict();
export const RegistrationCreateWithoutEventInputObjectSchema: z.ZodType<Prisma.RegistrationCreateWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationCreateWithoutEventInput>;
export const RegistrationCreateWithoutEventInputObjectZodSchema = makeSchema();
