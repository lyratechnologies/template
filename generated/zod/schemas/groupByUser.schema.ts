import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './objects/UserWhereInput.schema';
import { UserOrderByWithAggregationInputObjectSchema as UserOrderByWithAggregationInputObjectSchema } from './objects/UserOrderByWithAggregationInput.schema';
import { UserScalarWhereWithAggregatesInputObjectSchema as UserScalarWhereWithAggregatesInputObjectSchema } from './objects/UserScalarWhereWithAggregatesInput.schema';
import { UserScalarFieldEnumSchema } from './enums/UserScalarFieldEnum.schema';
import { UserCountAggregateInputObjectSchema as UserCountAggregateInputObjectSchema } from './objects/UserCountAggregateInput.schema';
import { UserMinAggregateInputObjectSchema as UserMinAggregateInputObjectSchema } from './objects/UserMinAggregateInput.schema';
import { UserMaxAggregateInputObjectSchema as UserMaxAggregateInputObjectSchema } from './objects/UserMaxAggregateInput.schema';

export const UserGroupBySchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({ where: UserWhereInputObjectSchema.optional(), orderBy: z.union([UserOrderByWithAggregationInputObjectSchema, UserOrderByWithAggregationInputObjectSchema.array()]).optional(), having: UserScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(UserScalarFieldEnumSchema), _count: z.union([ z.literal(true), UserCountAggregateInputObjectSchema ]).optional(), _min: UserMinAggregateInputObjectSchema.optional(), _max: UserMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserGroupByArgs>;

export const UserGroupByZodSchema = z.object({ where: UserWhereInputObjectSchema.optional(), orderBy: z.union([UserOrderByWithAggregationInputObjectSchema, UserOrderByWithAggregationInputObjectSchema.array()]).optional(), having: UserScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(UserScalarFieldEnumSchema), _count: z.union([ z.literal(true), UserCountAggregateInputObjectSchema ]).optional(), _min: UserMinAggregateInputObjectSchema.optional(), _max: UserMaxAggregateInputObjectSchema.optional() }).strict();