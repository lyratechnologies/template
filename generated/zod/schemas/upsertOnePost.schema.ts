import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { PostSelectObjectSchema as PostSelectObjectSchema } from './objects/PostSelect.schema';
import { PostIncludeObjectSchema as PostIncludeObjectSchema } from './objects/PostInclude.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './objects/PostWhereUniqueInput.schema';
import { PostCreateInputObjectSchema as PostCreateInputObjectSchema } from './objects/PostCreateInput.schema';
import { PostUncheckedCreateInputObjectSchema as PostUncheckedCreateInputObjectSchema } from './objects/PostUncheckedCreateInput.schema';
import { PostUpdateInputObjectSchema as PostUpdateInputObjectSchema } from './objects/PostUpdateInput.schema';
import { PostUncheckedUpdateInputObjectSchema as PostUncheckedUpdateInputObjectSchema } from './objects/PostUncheckedUpdateInput.schema';

export const PostUpsertOneSchema: z.ZodType<Prisma.PostUpsertArgs> = z.object({ select: PostSelectObjectSchema.optional(), include: PostIncludeObjectSchema.optional(), where: PostWhereUniqueInputObjectSchema, create: z.union([ PostCreateInputObjectSchema, PostUncheckedCreateInputObjectSchema ]), update: z.union([ PostUpdateInputObjectSchema, PostUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PostUpsertArgs>;

export const PostUpsertOneZodSchema = z.object({ select: PostSelectObjectSchema.optional(), include: PostIncludeObjectSchema.optional(), where: PostWhereUniqueInputObjectSchema, create: z.union([ PostCreateInputObjectSchema, PostUncheckedCreateInputObjectSchema ]), update: z.union([ PostUpdateInputObjectSchema, PostUncheckedUpdateInputObjectSchema ]) }).strict();