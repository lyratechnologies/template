import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutCreatedByInputObjectSchema as PostUpdateWithoutCreatedByInputObjectSchema } from './PostUpdateWithoutCreatedByInput.schema';
import { PostUncheckedUpdateWithoutCreatedByInputObjectSchema as PostUncheckedUpdateWithoutCreatedByInputObjectSchema } from './PostUncheckedUpdateWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PostUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
export const PostUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutCreatedByInput>;
export const PostUpdateWithWhereUniqueWithoutCreatedByInputObjectZodSchema = makeSchema();
