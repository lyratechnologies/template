import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostSelectObjectSchema as PostSelectObjectSchema } from './PostSelect.schema';
import { PostIncludeObjectSchema as PostIncludeObjectSchema } from './PostInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PostSelectObjectSchema).optional(),
  include: z.lazy(() => PostIncludeObjectSchema).optional()
}).strict();
export const PostArgsObjectSchema = makeSchema();
export const PostArgsObjectZodSchema = makeSchema();
