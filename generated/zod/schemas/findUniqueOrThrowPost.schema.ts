import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { PostSelectObjectSchema as PostSelectObjectSchema } from './objects/PostSelect.schema';
import { PostIncludeObjectSchema as PostIncludeObjectSchema } from './objects/PostInclude.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './objects/PostWhereUniqueInput.schema';

export const PostFindUniqueOrThrowSchema: z.ZodType<Prisma.PostFindUniqueOrThrowArgs> = z.object({ select: PostSelectObjectSchema.optional(), include: PostIncludeObjectSchema.optional(), where: PostWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PostFindUniqueOrThrowArgs>;

export const PostFindUniqueOrThrowZodSchema = z.object({ select: PostSelectObjectSchema.optional(), include: PostIncludeObjectSchema.optional(), where: PostWhereUniqueInputObjectSchema }).strict();