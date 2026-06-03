import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUpdateWithoutSessionsInputObjectSchema as UserUpdateWithoutSessionsInputObjectSchema } from './UserUpdateWithoutSessionsInput.schema';
import { UserUncheckedUpdateWithoutSessionsInputObjectSchema as UserUncheckedUpdateWithoutSessionsInputObjectSchema } from './UserUncheckedUpdateWithoutSessionsInput.schema';
import { UserCreateWithoutSessionsInputObjectSchema as UserCreateWithoutSessionsInputObjectSchema } from './UserCreateWithoutSessionsInput.schema';
import { UserUncheckedCreateWithoutSessionsInputObjectSchema as UserUncheckedCreateWithoutSessionsInputObjectSchema } from './UserUncheckedCreateWithoutSessionsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutSessionsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSessionsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutSessionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSessionsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutSessionsInput>;
export const UserUpsertWithoutSessionsInputObjectZodSchema = makeSchema();
