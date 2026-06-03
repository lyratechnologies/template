import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostCreateWithoutCreatedByInputObjectSchema as PostCreateWithoutCreatedByInputObjectSchema } from './PostCreateWithoutCreatedByInput.schema';
import { PostUncheckedCreateWithoutCreatedByInputObjectSchema as PostUncheckedCreateWithoutCreatedByInputObjectSchema } from './PostUncheckedCreateWithoutCreatedByInput.schema';
import { PostCreateOrConnectWithoutCreatedByInputObjectSchema as PostCreateOrConnectWithoutCreatedByInputObjectSchema } from './PostCreateOrConnectWithoutCreatedByInput.schema';
import { PostUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema as PostUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './PostUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { PostCreateManyCreatedByInputEnvelopeObjectSchema as PostCreateManyCreatedByInputEnvelopeObjectSchema } from './PostCreateManyCreatedByInputEnvelope.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema as PostUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './PostUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { PostUpdateManyWithWhereWithoutCreatedByInputObjectSchema as PostUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './PostUpdateManyWithWhereWithoutCreatedByInput.schema';
import { PostScalarWhereInputObjectSchema as PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PostCreateWithoutCreatedByInputObjectSchema), z.lazy(() => PostCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => PostUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PostCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => PostCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PostUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => PostUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PostCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PostUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => PostUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PostUpdateManyWithWhereWithoutCreatedByInputObjectSchema), z.lazy(() => PostUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PostScalarWhereInputObjectSchema), z.lazy(() => PostScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PostUpdateManyWithoutCreatedByNestedInputObjectSchema: z.ZodType<Prisma.PostUpdateManyWithoutCreatedByNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateManyWithoutCreatedByNestedInput>;
export const PostUpdateManyWithoutCreatedByNestedInputObjectZodSchema = makeSchema();
