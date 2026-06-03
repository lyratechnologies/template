import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WaitlistEntryWhereInputObjectSchema as WaitlistEntryWhereInputObjectSchema } from './WaitlistEntryWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WaitlistEntryWhereInputObjectSchema).optional()
}).strict();
export const EventCountOutputTypeCountWaitlistEntriesArgsObjectSchema = makeSchema();
export const EventCountOutputTypeCountWaitlistEntriesArgsObjectZodSchema = makeSchema();
