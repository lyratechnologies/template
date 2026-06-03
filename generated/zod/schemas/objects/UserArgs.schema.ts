import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserSelectObjectSchema as UserSelectObjectSchema } from './UserSelect.schema';
import { UserIncludeObjectSchema as UserIncludeObjectSchema } from './UserInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => UserSelectObjectSchema).optional(),
  include: z.lazy(() => UserIncludeObjectSchema).optional()
}).strict();
export const UserArgsObjectSchema = makeSchema();
export const UserArgsObjectZodSchema = makeSchema();
