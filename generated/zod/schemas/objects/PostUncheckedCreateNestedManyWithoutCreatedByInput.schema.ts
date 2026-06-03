import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostCreateWithoutCreatedByInputObjectSchema as PostCreateWithoutCreatedByInputObjectSchema } from './PostCreateWithoutCreatedByInput.schema';
import { PostUncheckedCreateWithoutCreatedByInputObjectSchema as PostUncheckedCreateWithoutCreatedByInputObjectSchema } from './PostUncheckedCreateWithoutCreatedByInput.schema';
import { PostCreateOrConnectWithoutCreatedByInputObjectSchema as PostCreateOrConnectWithoutCreatedByInputObjectSchema } from './PostCreateOrConnectWithoutCreatedByInput.schema';
import { PostCreateManyCreatedByInputEnvelopeObjectSchema as PostCreateManyCreatedByInputEnvelopeObjectSchema } from './PostCreateManyCreatedByInputEnvelope.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PostCreateWithoutCreatedByInputObjectSchema), z.lazy(() => PostCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => PostUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PostCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => PostCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PostCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PostUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.PostUncheckedCreateNestedManyWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUncheckedCreateNestedManyWithoutCreatedByInput>;
export const PostUncheckedCreateNestedManyWithoutCreatedByInputObjectZodSchema = makeSchema();
