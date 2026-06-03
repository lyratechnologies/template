import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutRegistrationsInputObjectSchema as UserUpdateWithoutRegistrationsInputObjectSchema } from './UserUpdateWithoutRegistrationsInput.schema';
import { UserUncheckedUpdateWithoutRegistrationsInputObjectSchema as UserUncheckedUpdateWithoutRegistrationsInputObjectSchema } from './UserUncheckedUpdateWithoutRegistrationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutRegistrationsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRegistrationsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutRegistrationsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRegistrationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRegistrationsInput>;
export const UserUpdateToOneWithWhereWithoutRegistrationsInputObjectZodSchema = makeSchema();
