import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostCreateWithoutCreatedByInputObjectSchema as PostCreateWithoutCreatedByInputObjectSchema } from './PostCreateWithoutCreatedByInput.schema';
import { PostUncheckedCreateWithoutCreatedByInputObjectSchema as PostUncheckedCreateWithoutCreatedByInputObjectSchema } from './PostUncheckedCreateWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PostCreateWithoutCreatedByInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const PostCreateOrConnectWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateOrConnectWithoutCreatedByInput>;
export const PostCreateOrConnectWithoutCreatedByInputObjectZodSchema = makeSchema();
