import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { PostSelectObjectSchema as PostSelectObjectSchema } from './objects/PostSelect.schema';
import { PostIncludeObjectSchema as PostIncludeObjectSchema } from './objects/PostInclude.schema';
import { PostCreateInputObjectSchema as PostCreateInputObjectSchema } from './objects/PostCreateInput.schema';
import { PostUncheckedCreateInputObjectSchema as PostUncheckedCreateInputObjectSchema } from './objects/PostUncheckedCreateInput.schema';

export const PostCreateOneSchema: z.ZodType<Prisma.PostCreateArgs> = z.object({ select: PostSelectObjectSchema.optional(), include: PostIncludeObjectSchema.optional(), data: z.union([PostCreateInputObjectSchema, PostUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PostCreateArgs>;

export const PostCreateOneZodSchema = z.object({ select: PostSelectObjectSchema.optional(), include: PostIncludeObjectSchema.optional(), data: z.union([PostCreateInputObjectSchema, PostUncheckedCreateInputObjectSchema]) }).strict();