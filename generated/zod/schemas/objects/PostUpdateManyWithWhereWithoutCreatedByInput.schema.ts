import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostScalarWhereInputObjectSchema as PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema';
import { PostUpdateManyMutationInputObjectSchema as PostUpdateManyMutationInputObjectSchema } from './PostUpdateManyMutationInput.schema';
import { PostUncheckedUpdateManyWithoutCreatedByInputObjectSchema as PostUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './PostUncheckedUpdateManyWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PostUpdateManyMutationInputObjectSchema), z.lazy(() => PostUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
export const PostUpdateManyWithWhereWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.PostUpdateManyWithWhereWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateManyWithWhereWithoutCreatedByInput>;
export const PostUpdateManyWithWhereWithoutCreatedByInputObjectZodSchema = makeSchema();
