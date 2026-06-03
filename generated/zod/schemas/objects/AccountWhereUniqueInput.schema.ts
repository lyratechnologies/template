import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const AccountWhereUniqueInputObjectSchema: z.ZodType<Prisma.AccountWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountWhereUniqueInput>;
export const AccountWhereUniqueInputObjectZodSchema = makeSchema();
