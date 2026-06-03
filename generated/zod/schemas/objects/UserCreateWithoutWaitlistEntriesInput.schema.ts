import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { RegistrationCreateNestedManyWithoutAttendeeInputObjectSchema as RegistrationCreateNestedManyWithoutAttendeeInputObjectSchema } from './RegistrationCreateNestedManyWithoutAttendeeInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean().optional(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  registrations: z.lazy(() => RegistrationCreateNestedManyWithoutAttendeeInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutWaitlistEntriesInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutWaitlistEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutWaitlistEntriesInput>;
export const UserCreateWithoutWaitlistEntriesInputObjectZodSchema = makeSchema();
