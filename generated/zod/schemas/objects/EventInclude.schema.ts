import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationFindManySchema as RegistrationFindManySchema } from '../findManyRegistration.schema';
import { WaitlistEntryFindManySchema as WaitlistEntryFindManySchema } from '../findManyWaitlistEntry.schema';
import { EventCountOutputTypeArgsObjectSchema as EventCountOutputTypeArgsObjectSchema } from './EventCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  registrations: z.union([z.boolean(), z.lazy(() => RegistrationFindManySchema)]).optional(),
  waitlistEntries: z.union([z.boolean(), z.lazy(() => WaitlistEntryFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EventCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EventIncludeObjectSchema: z.ZodType<Prisma.EventInclude> = makeSchema() as unknown as z.ZodType<Prisma.EventInclude>;
export const EventIncludeObjectZodSchema = makeSchema();
