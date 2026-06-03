import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { AccountCreateManyInputObjectSchema as AccountCreateManyInputObjectSchema } from './objects/AccountCreateManyInput.schema';

export const AccountCreateManySchema: z.ZodType<Prisma.AccountCreateManyArgs> = z.object({ data: z.union([ AccountCreateManyInputObjectSchema, z.array(AccountCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.AccountCreateManyArgs>;

export const AccountCreateManyZodSchema = z.object({ data: z.union([ AccountCreateManyInputObjectSchema, z.array(AccountCreateManyInputObjectSchema) ]),  }).strict();