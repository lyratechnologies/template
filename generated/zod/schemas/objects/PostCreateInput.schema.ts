import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutPostsInputObjectSchema as UserCreateNestedOneWithoutPostsInputObjectSchema } from './UserCreateNestedOneWithoutPostsInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutPostsInputObjectSchema)
}).strict();
export const PostCreateInputObjectSchema: z.ZodType<Prisma.PostCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateInput>;
export const PostCreateInputObjectZodSchema = makeSchema();
