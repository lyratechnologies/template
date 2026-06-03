import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { PostSelectObjectSchema as PostSelectObjectSchema } from './objects/PostSelect.schema';
import { PostCreateManyInputObjectSchema as PostCreateManyInputObjectSchema } from './objects/PostCreateManyInput.schema';

export const PostCreateManyAndReturnSchema: z.ZodType<Prisma.PostCreateManyAndReturnArgs> = z.object({ select: PostSelectObjectSchema.optional(), data: z.union([ PostCreateManyInputObjectSchema, z.array(PostCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PostCreateManyAndReturnArgs>;

export const PostCreateManyAndReturnZodSchema = z.object({ select: PostSelectObjectSchema.optional(), data: z.union([ PostCreateManyInputObjectSchema, z.array(PostCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();