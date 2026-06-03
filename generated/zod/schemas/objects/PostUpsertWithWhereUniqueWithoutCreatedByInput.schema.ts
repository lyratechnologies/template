import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutCreatedByInputObjectSchema as PostUpdateWithoutCreatedByInputObjectSchema } from './PostUpdateWithoutCreatedByInput.schema';
import { PostUncheckedUpdateWithoutCreatedByInputObjectSchema as PostUncheckedUpdateWithoutCreatedByInputObjectSchema } from './PostUncheckedUpdateWithoutCreatedByInput.schema';
import { PostCreateWithoutCreatedByInputObjectSchema as PostCreateWithoutCreatedByInputObjectSchema } from './PostCreateWithoutCreatedByInput.schema';
import { PostUncheckedCreateWithoutCreatedByInputObjectSchema as PostUncheckedCreateWithoutCreatedByInputObjectSchema } from './PostUncheckedCreateWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PostUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => PostCreateWithoutCreatedByInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const PostUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutCreatedByInput>;
export const PostUpsertWithWhereUniqueWithoutCreatedByInputObjectZodSchema = makeSchema();
