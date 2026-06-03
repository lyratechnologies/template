import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './objects/AccountWhereInput.schema';
import { AccountOrderByWithAggregationInputObjectSchema as AccountOrderByWithAggregationInputObjectSchema } from './objects/AccountOrderByWithAggregationInput.schema';
import { AccountScalarWhereWithAggregatesInputObjectSchema as AccountScalarWhereWithAggregatesInputObjectSchema } from './objects/AccountScalarWhereWithAggregatesInput.schema';
import { AccountScalarFieldEnumSchema } from './enums/AccountScalarFieldEnum.schema';
import { AccountCountAggregateInputObjectSchema as AccountCountAggregateInputObjectSchema } from './objects/AccountCountAggregateInput.schema';
import { AccountMinAggregateInputObjectSchema as AccountMinAggregateInputObjectSchema } from './objects/AccountMinAggregateInput.schema';
import { AccountMaxAggregateInputObjectSchema as AccountMaxAggregateInputObjectSchema } from './objects/AccountMaxAggregateInput.schema';

export const AccountGroupBySchema: z.ZodType<Prisma.AccountGroupByArgs> = z.object({ where: AccountWhereInputObjectSchema.optional(), orderBy: z.union([AccountOrderByWithAggregationInputObjectSchema, AccountOrderByWithAggregationInputObjectSchema.array()]).optional(), having: AccountScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(AccountScalarFieldEnumSchema), _count: z.union([ z.literal(true), AccountCountAggregateInputObjectSchema ]).optional(), _min: AccountMinAggregateInputObjectSchema.optional(), _max: AccountMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountGroupByArgs>;

export const AccountGroupByZodSchema = z.object({ where: AccountWhereInputObjectSchema.optional(), orderBy: z.union([AccountOrderByWithAggregationInputObjectSchema, AccountOrderByWithAggregationInputObjectSchema.array()]).optional(), having: AccountScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(AccountScalarFieldEnumSchema), _count: z.union([ z.literal(true), AccountCountAggregateInputObjectSchema ]).optional(), _min: AccountMinAggregateInputObjectSchema.optional(), _max: AccountMaxAggregateInputObjectSchema.optional() }).strict();