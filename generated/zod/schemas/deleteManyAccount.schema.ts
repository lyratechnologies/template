import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './objects/AccountWhereInput.schema';

export const AccountDeleteManySchema: z.ZodType<Prisma.AccountDeleteManyArgs> = z.object({ where: AccountWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountDeleteManyArgs>;

export const AccountDeleteManyZodSchema = z.object({ where: AccountWhereInputObjectSchema.optional() }).strict();