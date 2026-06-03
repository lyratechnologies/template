import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutSessionsInputObjectSchema as UserUpdateWithoutSessionsInputObjectSchema } from './UserUpdateWithoutSessionsInput.schema';
import { UserUncheckedUpdateWithoutSessionsInputObjectSchema as UserUncheckedUpdateWithoutSessionsInputObjectSchema } from './UserUncheckedUpdateWithoutSessionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutSessionsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSessionsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput>;
export const UserUpdateToOneWithWhereWithoutSessionsInputObjectZodSchema = makeSchema();
