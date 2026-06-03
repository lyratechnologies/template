import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventCountOutputTypeCountRegistrationsArgsObjectSchema as EventCountOutputTypeCountRegistrationsArgsObjectSchema } from './EventCountOutputTypeCountRegistrationsArgs.schema';
import { EventCountOutputTypeCountWaitlistEntriesArgsObjectSchema as EventCountOutputTypeCountWaitlistEntriesArgsObjectSchema } from './EventCountOutputTypeCountWaitlistEntriesArgs.schema'

const makeSchema = () => z.object({
  registrations: z.union([z.boolean(), z.lazy(() => EventCountOutputTypeCountRegistrationsArgsObjectSchema)]).optional(),
  waitlistEntries: z.union([z.boolean(), z.lazy(() => EventCountOutputTypeCountWaitlistEntriesArgsObjectSchema)]).optional()
}).strict();
export const EventCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.EventCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.EventCountOutputTypeSelect>;
export const EventCountOutputTypeSelectObjectZodSchema = makeSchema();
