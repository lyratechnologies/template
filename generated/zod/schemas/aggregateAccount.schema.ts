import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { AccountOrderByWithRelationInputObjectSchema as AccountOrderByWithRelationInputObjectSchema } from './objects/AccountOrderByWithRelationInput.schema';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './objects/AccountWhereInput.schema';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './objects/AccountWhereUniqueInput.schema';
import { AccountCountAggregateInputObjectSchema as AccountCountAggregateInputObjectSchema } from './objects/AccountCountAggregateInput.schema';
import { AccountMinAggregateInputObjectSchema as AccountMinAggregateInputObjectSchema } from './objects/AccountMinAggregateInput.schema';
import { AccountMaxAggregateInputObjectSchema as AccountMaxAggregateInputObjectSchema } from './objects/AccountMaxAggregateInput.schema';

export const AccountAggregateSchema: z.ZodType<Prisma.AccountAggregateArgs> = z.object({ orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AccountCountAggregateInputObjectSchema ]).optional(), _min: AccountMinAggregateInputObjectSchema.optional(), _max: AccountMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountAggregateArgs>;

export const AccountAggregateZodSchema = z.object({ orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AccountCountAggregateInputObjectSchema ]).optional(), _min: AccountMinAggregateInputObjectSchema.optional(), _max: AccountMaxAggregateInputObjectSchema.optional() }).strict();