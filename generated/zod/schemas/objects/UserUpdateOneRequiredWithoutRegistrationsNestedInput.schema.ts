import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutRegistrationsInputObjectSchema as UserCreateWithoutRegistrationsInputObjectSchema } from './UserCreateWithoutRegistrationsInput.schema';
import { UserUncheckedCreateWithoutRegistrationsInputObjectSchema as UserUncheckedCreateWithoutRegistrationsInputObjectSchema } from './UserUncheckedCreateWithoutRegistrationsInput.schema';
import { UserCreateOrConnectWithoutRegistrationsInputObjectSchema as UserCreateOrConnectWithoutRegistrationsInputObjectSchema } from './UserCreateOrConnectWithoutRegistrationsInput.schema';
import { UserUpsertWithoutRegistrationsInputObjectSchema as UserUpsertWithoutRegistrationsInputObjectSchema } from './UserUpsertWithoutRegistrationsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutRegistrationsInputObjectSchema as UserUpdateToOneWithWhereWithoutRegistrationsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutRegistrationsInput.schema';
import { UserUpdateWithoutRegistrationsInputObjectSchema as UserUpdateWithoutRegistrationsInputObjectSchema } from './UserUpdateWithoutRegistrationsInput.schema';
import { UserUncheckedUpdateWithoutRegistrationsInputObjectSchema as UserUncheckedUpdateWithoutRegistrationsInputObjectSchema } from './UserUncheckedUpdateWithoutRegistrationsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutRegistrationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRegistrationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRegistrationsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutRegistrationsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutRegistrationsInputObjectSchema), z.lazy(() => UserUpdateWithoutRegistrationsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRegistrationsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutRegistrationsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutRegistrationsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutRegistrationsNestedInput>;
export const UserUpdateOneRequiredWithoutRegistrationsNestedInputObjectZodSchema = makeSchema();
