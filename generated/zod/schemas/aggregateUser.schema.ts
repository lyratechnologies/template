import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './objects/UserOrderByWithRelationInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './objects/UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema';
import { UserCountAggregateInputObjectSchema as UserCountAggregateInputObjectSchema } from './objects/UserCountAggregateInput.schema';
import { UserMinAggregateInputObjectSchema as UserMinAggregateInputObjectSchema } from './objects/UserMinAggregateInput.schema';
import { UserMaxAggregateInputObjectSchema as UserMaxAggregateInputObjectSchema } from './objects/UserMaxAggregateInput.schema';

export const UserAggregateSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({ orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), UserCountAggregateInputObjectSchema ]).optional(), _min: UserMinAggregateInputObjectSchema.optional(), _max: UserMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserAggregateArgs>;

export const UserAggregateZodSchema = z.object({ orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), UserCountAggregateInputObjectSchema ]).optional(), _min: UserMinAggregateInputObjectSchema.optional(), _max: UserMaxAggregateInputObjectSchema.optional() }).strict();