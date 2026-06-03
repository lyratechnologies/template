import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { PostOrderByWithRelationInputObjectSchema as PostOrderByWithRelationInputObjectSchema } from './objects/PostOrderByWithRelationInput.schema';
import { PostWhereInputObjectSchema as PostWhereInputObjectSchema } from './objects/PostWhereInput.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './objects/PostWhereUniqueInput.schema';
import { PostCountAggregateInputObjectSchema as PostCountAggregateInputObjectSchema } from './objects/PostCountAggregateInput.schema';
import { PostMinAggregateInputObjectSchema as PostMinAggregateInputObjectSchema } from './objects/PostMinAggregateInput.schema';
import { PostMaxAggregateInputObjectSchema as PostMaxAggregateInputObjectSchema } from './objects/PostMaxAggregateInput.schema';
import { PostAvgAggregateInputObjectSchema as PostAvgAggregateInputObjectSchema } from './objects/PostAvgAggregateInput.schema';
import { PostSumAggregateInputObjectSchema as PostSumAggregateInputObjectSchema } from './objects/PostSumAggregateInput.schema';

export const PostAggregateSchema: z.ZodType<Prisma.PostAggregateArgs> = z.object({ orderBy: z.union([PostOrderByWithRelationInputObjectSchema, PostOrderByWithRelationInputObjectSchema.array()]).optional(), where: PostWhereInputObjectSchema.optional(), cursor: PostWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), PostCountAggregateInputObjectSchema ]).optional(), _min: PostMinAggregateInputObjectSchema.optional(), _max: PostMaxAggregateInputObjectSchema.optional(), _avg: PostAvgAggregateInputObjectSchema.optional(), _sum: PostSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PostAggregateArgs>;

export const PostAggregateZodSchema = z.object({ orderBy: z.union([PostOrderByWithRelationInputObjectSchema, PostOrderByWithRelationInputObjectSchema.array()]).optional(), where: PostWhereInputObjectSchema.optional(), cursor: PostWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), PostCountAggregateInputObjectSchema ]).optional(), _min: PostMinAggregateInputObjectSchema.optional(), _max: PostMaxAggregateInputObjectSchema.optional(), _avg: PostAvgAggregateInputObjectSchema.optional(), _sum: PostSumAggregateInputObjectSchema.optional() }).strict();