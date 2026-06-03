import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
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
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  registrations: z.lazy(() => RegistrationCreateNestedManyWithoutAttendeeInputObjectSchema).optional(),
  waitlistEntries: z.lazy(() => WaitlistEntryCreateNestedManyWithoutAttendeeInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutAccountsInput>;
export const UserCreateWithoutAccountsInputObjectZodSchema = makeSchema();
