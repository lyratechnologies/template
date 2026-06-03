import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutWaitlistEntriesInputObjectSchema as UserUpdateWithoutWaitlistEntriesInputObjectSchema } from './UserUpdateWithoutWaitlistEntriesInput.schema';
import { UserUncheckedUpdateWithoutWaitlistEntriesInputObjectSchema as UserUncheckedUpdateWithoutWaitlistEntriesInputObjectSchema } from './UserUncheckedUpdateWithoutWaitlistEntriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutWaitlistEntriesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWaitlistEntriesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutWaitlistEntriesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutWaitlistEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutWaitlistEntriesInput>;
export const UserUpdateToOneWithWhereWithoutWaitlistEntriesInputObjectZodSchema = makeSchema();
