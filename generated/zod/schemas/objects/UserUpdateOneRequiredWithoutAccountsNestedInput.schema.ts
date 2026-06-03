import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutAccountsInputObjectSchema as UserCreateWithoutAccountsInputObjectSchema } from './UserCreateWithoutAccountsInput.schema';
import { UserUncheckedCreateWithoutAccountsInputObjectSchema as UserUncheckedCreateWithoutAccountsInputObjectSchema } from './UserUncheckedCreateWithoutAccountsInput.schema';
import { UserCreateOrConnectWithoutAccountsInputObjectSchema as UserCreateOrConnectWithoutAccountsInputObjectSchema } from './UserCreateOrConnectWithoutAccountsInput.schema';
import { UserUpsertWithoutAccountsInputObjectSchema as UserUpsertWithoutAccountsInputObjectSchema } from './UserUpsertWithoutAccountsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutAccountsInputObjectSchema as UserUpdateToOneWithWhereWithoutAccountsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutAccountsInput.schema';
import { UserUpdateWithoutAccountsInputObjectSchema as UserUpdateWithoutAccountsInputObjectSchema } from './UserUpdateWithoutAccountsInput.schema';
import { UserUncheckedUpdateWithoutAccountsInputObjectSchema as UserUncheckedUpdateWithoutAccountsInputObjectSchema } from './UserUncheckedUpdateWithoutAccountsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAccountsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAccountsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAccountsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutAccountsInputObjectSchema), z.lazy(() => UserUpdateWithoutAccountsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAccountsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutAccountsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput>;
export const UserUpdateOneRequiredWithoutAccountsNestedInputObjectZodSchema = makeSchema();
