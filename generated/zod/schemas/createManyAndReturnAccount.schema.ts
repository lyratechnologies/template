import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { AccountSelectObjectSchema as AccountSelectObjectSchema } from './objects/AccountSelect.schema';
import { AccountCreateManyInputObjectSchema as AccountCreateManyInputObjectSchema } from './objects/AccountCreateManyInput.schema';

export const AccountCreateManyAndReturnSchema: z.ZodType<Prisma.AccountCreateManyAndReturnArgs> = z.object({ select: AccountSelectObjectSchema.optional(), data: z.union([ AccountCreateManyInputObjectSchema, z.array(AccountCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AccountCreateManyAndReturnArgs>;

export const AccountCreateManyAndReturnZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), data: z.union([ AccountCreateManyInputObjectSchema, z.array(AccountCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();