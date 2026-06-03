import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { AccountSelectObjectSchema as AccountSelectObjectSchema } from './AccountSelect.schema';
import { AccountIncludeObjectSchema as AccountIncludeObjectSchema } from './AccountInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AccountSelectObjectSchema).optional(),
  include: z.lazy(() => AccountIncludeObjectSchema).optional()
}).strict();
export const AccountArgsObjectSchema = makeSchema();
export const AccountArgsObjectZodSchema = makeSchema();
