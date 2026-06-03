import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutRegistrationsInputObjectSchema as UserCreateWithoutRegistrationsInputObjectSchema } from './UserCreateWithoutRegistrationsInput.schema';
import { UserUncheckedCreateWithoutRegistrationsInputObjectSchema as UserUncheckedCreateWithoutRegistrationsInputObjectSchema } from './UserUncheckedCreateWithoutRegistrationsInput.schema';
import { UserCreateOrConnectWithoutRegistrationsInputObjectSchema as UserCreateOrConnectWithoutRegistrationsInputObjectSchema } from './UserCreateOrConnectWithoutRegistrationsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutRegistrationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRegistrationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRegistrationsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutRegistrationsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutRegistrationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutRegistrationsInput>;
export const UserCreateNestedOneWithoutRegistrationsInputObjectZodSchema = makeSchema();
