import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { AccountFindManySchema as AccountFindManySchema } from '../findManyAccount.schema';
import { SessionFindManySchema as SessionFindManySchema } from '../findManySession.schema';
import { RegistrationFindManySchema as RegistrationFindManySchema } from '../findManyRegistration.schema';
import { WaitlistEntryFindManySchema as WaitlistEntryFindManySchema } from '../findManyWaitlistEntry.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  image: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  registrations: z.union([z.boolean(), z.lazy(() => RegistrationFindManySchema)]).optional(),
  waitlistEntries: z.union([z.boolean(), z.lazy(() => WaitlistEntryFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
