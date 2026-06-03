import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventSelectObjectSchema as EventSelectObjectSchema } from './EventSelect.schema';
import { EventIncludeObjectSchema as EventIncludeObjectSchema } from './EventInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => EventSelectObjectSchema).optional(),
  include: z.lazy(() => EventIncludeObjectSchema).optional()
}).strict();
export const EventArgsObjectSchema = makeSchema();
export const EventArgsObjectZodSchema = makeSchema();
