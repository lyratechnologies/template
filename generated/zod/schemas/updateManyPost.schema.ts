import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { PostUpdateManyMutationInputObjectSchema as PostUpdateManyMutationInputObjectSchema } from './objects/PostUpdateManyMutationInput.schema';
import { PostWhereInputObjectSchema as PostWhereInputObjectSchema } from './objects/PostWhereInput.schema';

export const PostUpdateManySchema: z.ZodType<Prisma.PostUpdateManyArgs> = z.object({ data: PostUpdateManyMutationInputObjectSchema, where: PostWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PostUpdateManyArgs>;

export const PostUpdateManyZodSchema = z.object({ data: PostUpdateManyMutationInputObjectSchema, where: PostWhereInputObjectSchema.optional() }).strict();