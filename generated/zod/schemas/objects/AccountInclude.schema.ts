import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const AccountIncludeObjectSchema: z.ZodType<Prisma.AccountInclude> = makeSchema() as unknown as z.ZodType<Prisma.AccountInclude>;
export const AccountIncludeObjectZodSchema = makeSchema();
