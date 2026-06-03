import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './AccountWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AccountWhereInputObjectSchema).optional(),
  some: z.lazy(() => AccountWhereInputObjectSchema).optional(),
  none: z.lazy(() => AccountWhereInputObjectSchema).optional()
}).strict();
export const AccountListRelationFilterObjectSchema: z.ZodType<Prisma.AccountListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AccountListRelationFilter>;
export const AccountListRelationFilterObjectZodSchema = makeSchema();
