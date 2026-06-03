import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { AccountSelectObjectSchema as AccountSelectObjectSchema } from './objects/AccountSelect.schema';
import { AccountIncludeObjectSchema as AccountIncludeObjectSchema } from './objects/AccountInclude.schema';
import { AccountUpdateInputObjectSchema as AccountUpdateInputObjectSchema } from './objects/AccountUpdateInput.schema';
import { AccountUncheckedUpdateInputObjectSchema as AccountUncheckedUpdateInputObjectSchema } from './objects/AccountUncheckedUpdateInput.schema';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './objects/AccountWhereUniqueInput.schema';

export const AccountUpdateOneSchema: z.ZodType<Prisma.AccountUpdateArgs> = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), data: z.union([AccountUpdateInputObjectSchema, AccountUncheckedUpdateInputObjectSchema]), where: AccountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountUpdateArgs>;

export const AccountUpdateOneZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), data: z.union([AccountUpdateInputObjectSchema, AccountUncheckedUpdateInputObjectSchema]), where: AccountWhereUniqueInputObjectSchema }).strict();