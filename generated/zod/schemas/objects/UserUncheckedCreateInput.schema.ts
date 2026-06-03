import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema as AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
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
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  registrations: z.lazy(() => RegistrationUncheckedCreateNestedManyWithoutAttendeeInputObjectSchema).optional(),
  waitlistEntries: z.lazy(() => WaitlistEntryUncheckedCreateNestedManyWithoutAttendeeInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateInput>;
export const UserUncheckedCreateInputObjectZodSchema = makeSchema();
