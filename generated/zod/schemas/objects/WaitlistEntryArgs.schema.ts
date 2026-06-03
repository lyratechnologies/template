import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WaitlistEntrySelectObjectSchema as WaitlistEntrySelectObjectSchema } from './WaitlistEntrySelect.schema';
import { WaitlistEntryIncludeObjectSchema as WaitlistEntryIncludeObjectSchema } from './WaitlistEntryInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WaitlistEntrySelectObjectSchema).optional(),
  include: z.lazy(() => WaitlistEntryIncludeObjectSchema).optional()
}).strict();
export const WaitlistEntryArgsObjectSchema = makeSchema();
export const WaitlistEntryArgsObjectZodSchema = makeSchema();
