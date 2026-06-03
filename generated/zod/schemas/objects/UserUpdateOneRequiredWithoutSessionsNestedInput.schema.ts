import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutSessionsInputObjectSchema as UserCreateWithoutSessionsInputObjectSchema } from './UserCreateWithoutSessionsInput.schema';
import { UserUncheckedCreateWithoutSessionsInputObjectSchema as UserUncheckedCreateWithoutSessionsInputObjectSchema } from './UserUncheckedCreateWithoutSessionsInput.schema';
import { UserCreateOrConnectWithoutSessionsInputObjectSchema as UserCreateOrConnectWithoutSessionsInputObjectSchema } from './UserCreateOrConnectWithoutSessionsInput.schema';
import { UserUpsertWithoutSessionsInputObjectSchema as UserUpsertWithoutSessionsInputObjectSchema } from './UserUpsertWithoutSessionsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutSessionsInputObjectSchema as UserUpdateToOneWithWhereWithoutSessionsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutSessionsInput.schema';
import { UserUpdateWithoutSessionsInputObjectSchema as UserUpdateWithoutSessionsInputObjectSchema } from './UserUpdateWithoutSessionsInput.schema';
import { UserUncheckedUpdateWithoutSessionsInputObjectSchema as UserUncheckedUpdateWithoutSessionsInputObjectSchema } from './UserUncheckedUpdateWithoutSessionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutSessionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSessionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSessionsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutSessionsInputObjectSchema), z.lazy(() => UserUpdateWithoutSessionsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSessionsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutSessionsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput>;
export const UserUpdateOneRequiredWithoutSessionsNestedInputObjectZodSchema = makeSchema();
