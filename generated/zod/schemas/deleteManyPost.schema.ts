import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { PostWhereInputObjectSchema as PostWhereInputObjectSchema } from './objects/PostWhereInput.schema';

export const PostDeleteManySchema: z.ZodType<Prisma.PostDeleteManyArgs> = z.object({ where: PostWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PostDeleteManyArgs>;

export const PostDeleteManyZodSchema = z.object({ where: PostWhereInputObjectSchema.optional() }).strict();