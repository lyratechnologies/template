import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUpdateWithoutRegistrationsInputObjectSchema as UserUpdateWithoutRegistrationsInputObjectSchema } from './UserUpdateWithoutRegistrationsInput.schema';
import { UserUncheckedUpdateWithoutRegistrationsInputObjectSchema as UserUncheckedUpdateWithoutRegistrationsInputObjectSchema } from './UserUncheckedUpdateWithoutRegistrationsInput.schema';
import { UserCreateWithoutRegistrationsInputObjectSchema as UserCreateWithoutRegistrationsInputObjectSchema } from './UserCreateWithoutRegistrationsInput.schema';
import { UserUncheckedCreateWithoutRegistrationsInputObjectSchema as UserUncheckedCreateWithoutRegistrationsInputObjectSchema } from './UserUncheckedCreateWithoutRegistrationsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutRegistrationsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRegistrationsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutRegistrationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRegistrationsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutRegistrationsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutRegistrationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutRegistrationsInput>;
export const UserUpsertWithoutRegistrationsInputObjectZodSchema = makeSchema();
