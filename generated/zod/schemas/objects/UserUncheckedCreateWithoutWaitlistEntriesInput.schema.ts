import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema as AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { RegistrationUncheckedCreateNestedManyWithoutAttendeeInputObjectSchema as RegistrationUncheckedCreateNestedManyWithoutAttendeeInputObjectSchema } from './RegistrationUncheckedCreateNestedManyWithoutAttendeeInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean().optional(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  registrations: z.lazy(() => RegistrationUncheckedCreateNestedManyWithoutAttendeeInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutWaitlistEntriesInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutWaitlistEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutWaitlistEntriesInput>;
export const UserUncheckedCreateWithoutWaitlistEntriesInputObjectZodSchema = makeSchema();
