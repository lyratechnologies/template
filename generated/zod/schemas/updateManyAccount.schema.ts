import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { AccountUpdateManyMutationInputObjectSchema as AccountUpdateManyMutationInputObjectSchema } from './objects/AccountUpdateManyMutationInput.schema';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './objects/AccountWhereInput.schema';

export const AccountUpdateManySchema: z.ZodType<Prisma.AccountUpdateManyArgs> = z.object({ data: AccountUpdateManyMutationInputObjectSchema, where: AccountWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountUpdateManyArgs>;

export const AccountUpdateManyZodSchema = z.object({ data: AccountUpdateManyMutationInputObjectSchema, where: AccountWhereInputObjectSchema.optional() }).strict();