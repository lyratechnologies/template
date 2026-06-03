import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutRegistrationsInputObjectSchema as UserCreateWithoutRegistrationsInputObjectSchema } from './UserCreateWithoutRegistrationsInput.schema';
import { UserUncheckedCreateWithoutRegistrationsInputObjectSchema as UserUncheckedCreateWithoutRegistrationsInputObjectSchema } from './UserUncheckedCreateWithoutRegistrationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutRegistrationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRegistrationsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutRegistrationsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutRegistrationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutRegistrationsInput>;
export const UserCreateOrConnectWithoutRegistrationsInputObjectZodSchema = makeSchema();
