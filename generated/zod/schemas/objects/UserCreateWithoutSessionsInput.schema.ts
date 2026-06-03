import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { RegistrationCreateNestedManyWithoutAttendeeInputObjectSchema as RegistrationCreateNestedManyWithoutAttendeeInputObjectSchema } from './RegistrationCreateNestedManyWithoutAttendeeInput.schema';
import { WaitlistEntryCreateNestedManyWithoutAttendeeInputObjectSchema as WaitlistEntryCreateNestedManyWithoutAttendeeInputObjectSchema } from './WaitlistEntryCreateNestedManyWithoutAttendeeInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean().optional(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  registrations: z.lazy(() => RegistrationCreateNestedManyWithoutAttendeeInputObjectSchema).optional(),
  waitlistEntries: z.lazy(() => WaitlistEntryCreateNestedManyWithoutAttendeeInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutSessionsInput>;
export const UserCreateWithoutSessionsInputObjectZodSchema = makeSchema();
