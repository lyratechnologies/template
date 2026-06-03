import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostWhereInputObjectSchema as PostWhereInputObjectSchema } from './PostWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountPostsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountPostsArgsObjectZodSchema = makeSchema();
