import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUpdateWithoutPostsInputObjectSchema as UserUpdateWithoutPostsInputObjectSchema } from './UserUpdateWithoutPostsInput.schema';
import { UserUncheckedUpdateWithoutPostsInputObjectSchema as UserUncheckedUpdateWithoutPostsInputObjectSchema } from './UserUncheckedUpdateWithoutPostsInput.schema';
import { UserCreateWithoutPostsInputObjectSchema as UserCreateWithoutPostsInputObjectSchema } from './UserCreateWithoutPostsInput.schema';
import { UserUncheckedCreateWithoutPostsInputObjectSchema as UserUncheckedCreateWithoutPostsInputObjectSchema } from './UserUncheckedCreateWithoutPostsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutPostsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPostsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutPostsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPostsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutPostsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutPostsInput>;
export const UserUpsertWithoutPostsInputObjectZodSchema = makeSchema();
