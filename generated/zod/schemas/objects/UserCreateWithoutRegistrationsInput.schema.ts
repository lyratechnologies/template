import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
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
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  waitlistEntries: z.lazy(() => WaitlistEntryCreateNestedManyWithoutAttendeeInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutRegistrationsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutRegistrationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutRegistrationsInput>;
export const UserCreateWithoutRegistrationsInputObjectZodSchema = makeSchema();
