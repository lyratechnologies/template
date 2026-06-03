import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './AccountWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountAccountsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountAccountsArgsObjectZodSchema = makeSchema();
