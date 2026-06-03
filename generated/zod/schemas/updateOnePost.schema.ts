import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { PostSelectObjectSchema as PostSelectObjectSchema } from './objects/PostSelect.schema';
import { PostIncludeObjectSchema as PostIncludeObjectSchema } from './objects/PostInclude.schema';
import { PostUpdateInputObjectSchema as PostUpdateInputObjectSchema } from './objects/PostUpdateInput.schema';
import { PostUncheckedUpdateInputObjectSchema as PostUncheckedUpdateInputObjectSchema } from './objects/PostUncheckedUpdateInput.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './objects/PostWhereUniqueInput.schema';

export const PostUpdateOneSchema: z.ZodType<Prisma.PostUpdateArgs> = z.object({ select: PostSelectObjectSchema.optional(), include: PostIncludeObjectSchema.optional(), data: z.union([PostUpdateInputObjectSchema, PostUncheckedUpdateInputObjectSchema]), where: PostWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PostUpdateArgs>;

export const PostUpdateOneZodSchema = z.object({ select: PostSelectObjectSchema.optional(), include: PostIncludeObjectSchema.optional(), data: z.union([PostUpdateInputObjectSchema, PostUncheckedUpdateInputObjectSchema]), where: PostWhereUniqueInputObjectSchema }).strict();