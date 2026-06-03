import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { AccountSelectObjectSchema as AccountSelectObjectSchema } from './objects/AccountSelect.schema';
import { AccountUpdateManyMutationInputObjectSchema as AccountUpdateManyMutationInputObjectSchema } from './objects/AccountUpdateManyMutationInput.schema';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './objects/AccountWhereInput.schema';

export const AccountUpdateManyAndReturnSchema: z.ZodType<Prisma.AccountUpdateManyAndReturnArgs> = z.object({ select: AccountSelectObjectSchema.optional(), data: AccountUpdateManyMutationInputObjectSchema, where: AccountWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountUpdateManyAndReturnArgs>;

export const AccountUpdateManyAndReturnZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), data: AccountUpdateManyMutationInputObjectSchema, where: AccountWhereInputObjectSchema.optional() }).strict();