import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostWhereInputObjectSchema as PostWhereInputObjectSchema } from './PostWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => PostWhereInputObjectSchema).optional(),
  some: z.lazy(() => PostWhereInputObjectSchema).optional(),
  none: z.lazy(() => PostWhereInputObjectSchema).optional()
}).strict();
export const PostListRelationFilterObjectSchema: z.ZodType<Prisma.PostListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PostListRelationFilter>;
export const PostListRelationFilterObjectZodSchema = makeSchema();
