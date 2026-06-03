import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCountOutputTypeCountAccountsArgsObjectSchema as UserCountOutputTypeCountAccountsArgsObjectSchema } from './UserCountOutputTypeCountAccountsArgs.schema';
import { UserCountOutputTypeCountSessionsArgsObjectSchema as UserCountOutputTypeCountSessionsArgsObjectSchema } from './UserCountOutputTypeCountSessionsArgs.schema';
import { UserCountOutputTypeCountRegistrationsArgsObjectSchema as UserCountOutputTypeCountRegistrationsArgsObjectSchema } from './UserCountOutputTypeCountRegistrationsArgs.schema';
import { UserCountOutputTypeCountWaitlistEntriesArgsObjectSchema as UserCountOutputTypeCountWaitlistEntriesArgsObjectSchema } from './UserCountOutputTypeCountWaitlistEntriesArgs.schema'

const makeSchema = () => z.object({
  accounts: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountAccountsArgsObjectSchema)]).optional(),
  sessions: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountSessionsArgsObjectSchema)]).optional(),
  registrations: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountRegistrationsArgsObjectSchema)]).optional(),
  waitlistEntries: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountWaitlistEntriesArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
