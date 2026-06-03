import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { PostSelectObjectSchema as PostSelectObjectSchema } from './objects/PostSelect.schema';
import { PostUpdateManyMutationInputObjectSchema as PostUpdateManyMutationInputObjectSchema } from './objects/PostUpdateManyMutationInput.schema';
import { PostWhereInputObjectSchema as PostWhereInputObjectSchema } from './objects/PostWhereInput.schema';

export const PostUpdateManyAndReturnSchema: z.ZodType<Prisma.PostUpdateManyAndReturnArgs> = z.object({ select: PostSelectObjectSchema.optional(), data: PostUpdateManyMutationInputObjectSchema, where: PostWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PostUpdateManyAndReturnArgs>;

export const PostUpdateManyAndReturnZodSchema = z.object({ select: PostSelectObjectSchema.optional(), data: PostUpdateManyMutationInputObjectSchema, where: PostWhereInputObjectSchema.optional() }).strict();