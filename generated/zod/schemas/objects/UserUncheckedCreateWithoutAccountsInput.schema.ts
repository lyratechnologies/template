import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { RegistrationUncheckedCreateNestedManyWithoutAttendeeInputObjectSchema as RegistrationUncheckedCreateNestedManyWithoutAttendeeInputObjectSchema } from './RegistrationUncheckedCreateNestedManyWithoutAttendeeInput.schema';
import { WaitlistEntryUncheckedCreateNestedManyWithoutAttendeeInputObjectSchema as WaitlistEntryUncheckedCreateNestedManyWithoutAttendeeInputObjectSchema } from './WaitlistEntryUncheckedCreateNestedManyWithoutAttendeeInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean().optional(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  registrations: z.lazy(() => RegistrationUncheckedCreateNestedManyWithoutAttendeeInputObjectSchema).optional(),
  waitlistEntries: z.lazy(() => WaitlistEntryUncheckedCreateNestedManyWithoutAttendeeInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput>;
export const UserUncheckedCreateWithoutAccountsInputObjectZodSchema = makeSchema();
