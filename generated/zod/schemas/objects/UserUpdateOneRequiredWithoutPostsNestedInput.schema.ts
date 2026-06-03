import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutPostsInputObjectSchema as UserCreateWithoutPostsInputObjectSchema } from './UserCreateWithoutPostsInput.schema';
import { UserUncheckedCreateWithoutPostsInputObjectSchema as UserUncheckedCreateWithoutPostsInputObjectSchema } from './UserUncheckedCreateWithoutPostsInput.schema';
import { UserCreateOrConnectWithoutPostsInputObjectSchema as UserCreateOrConnectWithoutPostsInputObjectSchema } from './UserCreateOrConnectWithoutPostsInput.schema';
import { UserUpsertWithoutPostsInputObjectSchema as UserUpsertWithoutPostsInputObjectSchema } from './UserUpsertWithoutPostsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutPostsInputObjectSchema as UserUpdateToOneWithWhereWithoutPostsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutPostsInput.schema';
import { UserUpdateWithoutPostsInputObjectSchema as UserUpdateWithoutPostsInputObjectSchema } from './UserUpdateWithoutPostsInput.schema';
import { UserUncheckedUpdateWithoutPostsInputObjectSchema as UserUncheckedUpdateWithoutPostsInputObjectSchema } from './UserUncheckedUpdateWithoutPostsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPostsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPostsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPostsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPostsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutPostsInputObjectSchema), z.lazy(() => UserUpdateWithoutPostsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPostsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutPostsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPostsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutPostsNestedInput>;
export const UserUpdateOneRequiredWithoutPostsNestedInputObjectZodSchema = makeSchema();
