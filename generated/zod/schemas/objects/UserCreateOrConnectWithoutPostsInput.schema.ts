import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPostsInputObjectSchema as UserCreateWithoutPostsInputObjectSchema } from './UserCreateWithoutPostsInput.schema';
import { UserUncheckedCreateWithoutPostsInputObjectSchema as UserUncheckedCreateWithoutPostsInputObjectSchema } from './UserUncheckedCreateWithoutPostsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutPostsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPostsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutPostsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutPostsInput>;
export const UserCreateOrConnectWithoutPostsInputObjectZodSchema = makeSchema();
