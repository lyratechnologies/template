import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationFindManySchema as RegistrationFindManySchema } from '../findManyRegistration.schema';
import { WaitlistEntryFindManySchema as WaitlistEntryFindManySchema } from '../findManyWaitlistEntry.schema';
import { EventCountOutputTypeArgsObjectSchema as EventCountOutputTypeArgsObjectSchema } from './EventCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  startsAt: z.boolean().optional(),
  capacity: z.boolean().optional(),
  registrationOpensAt: z.boolean().optional(),
  registrationClosesAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  registrations: z.union([z.boolean(), z.lazy(() => RegistrationFindManySchema)]).optional(),
  waitlistEntries: z.union([z.boolean(), z.lazy(() => WaitlistEntryFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EventCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EventSelectObjectSchema: z.ZodType<Prisma.EventSelect> = makeSchema() as unknown as z.ZodType<Prisma.EventSelect>;
export const EventSelectObjectZodSchema = makeSchema();
