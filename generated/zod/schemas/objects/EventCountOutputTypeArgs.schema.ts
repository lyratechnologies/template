import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventCountOutputTypeSelectObjectSchema as EventCountOutputTypeSelectObjectSchema } from './EventCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => EventCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const EventCountOutputTypeArgsObjectSchema = makeSchema();
export const EventCountOutputTypeArgsObjectZodSchema = makeSchema();
