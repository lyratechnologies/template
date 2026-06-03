import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { PostCreateManyInputObjectSchema as PostCreateManyInputObjectSchema } from './objects/PostCreateManyInput.schema';

export const PostCreateManySchema: z.ZodType<Prisma.PostCreateManyArgs> = z.object({ data: z.union([ PostCreateManyInputObjectSchema, z.array(PostCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PostCreateManyArgs>;

export const PostCreateManyZodSchema = z.object({ data: z.union([ PostCreateManyInputObjectSchema, z.array(PostCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();