import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { AccountSelectObjectSchema as AccountSelectObjectSchema } from './objects/AccountSelect.schema';
import { AccountIncludeObjectSchema as AccountIncludeObjectSchema } from './objects/AccountInclude.schema';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './objects/AccountWhereUniqueInput.schema';

export const AccountDeleteOneSchema: z.ZodType<Prisma.AccountDeleteArgs> = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), where: AccountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountDeleteArgs>;

export const AccountDeleteOneZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), where: AccountWhereUniqueInputObjectSchema }).strict();