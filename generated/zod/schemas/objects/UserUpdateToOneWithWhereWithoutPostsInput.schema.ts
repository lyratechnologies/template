import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutPostsInputObjectSchema as UserUpdateWithoutPostsInputObjectSchema } from './UserUpdateWithoutPostsInput.schema';
import { UserUncheckedUpdateWithoutPostsInputObjectSchema as UserUncheckedUpdateWithoutPostsInputObjectSchema } from './UserUncheckedUpdateWithoutPostsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutPostsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPostsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutPostsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPostsInput>;
export const UserUpdateToOneWithWhereWithoutPostsInputObjectZodSchema = makeSchema();
