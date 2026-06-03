import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutAccountsInputObjectSchema as UserCreateWithoutAccountsInputObjectSchema } from './UserCreateWithoutAccountsInput.schema';
import { UserUncheckedCreateWithoutAccountsInputObjectSchema as UserUncheckedCreateWithoutAccountsInputObjectSchema } from './UserUncheckedCreateWithoutAccountsInput.schema';
import { UserCreateOrConnectWithoutAccountsInputObjectSchema as UserCreateOrConnectWithoutAccountsInputObjectSchema } from './UserCreateOrConnectWithoutAccountsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAccountsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAccountsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccountsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutAccountsInput>;
export const UserCreateNestedOneWithoutAccountsInputObjectZodSchema = makeSchema();
