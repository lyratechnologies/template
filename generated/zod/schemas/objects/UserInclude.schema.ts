import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { AccountFindManySchema as AccountFindManySchema } from '../findManyAccount.schema';
import { SessionFindManySchema as SessionFindManySchema } from '../findManySession.schema';
import { RegistrationFindManySchema as RegistrationFindManySchema } from '../findManyRegistration.schema';
import { WaitlistEntryFindManySchema as WaitlistEntryFindManySchema } from '../findManyWaitlistEntry.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  registrations: z.union([z.boolean(), z.lazy(() => RegistrationFindManySchema)]).optional(),
  waitlistEntries: z.union([z.boolean(), z.lazy(() => WaitlistEntryFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
