import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUpdateWithoutWaitlistEntriesInputObjectSchema as UserUpdateWithoutWaitlistEntriesInputObjectSchema } from './UserUpdateWithoutWaitlistEntriesInput.schema';
import { UserUncheckedUpdateWithoutWaitlistEntriesInputObjectSchema as UserUncheckedUpdateWithoutWaitlistEntriesInputObjectSchema } from './UserUncheckedUpdateWithoutWaitlistEntriesInput.schema';
import { UserCreateWithoutWaitlistEntriesInputObjectSchema as UserCreateWithoutWaitlistEntriesInputObjectSchema } from './UserCreateWithoutWaitlistEntriesInput.schema';
import { UserUncheckedCreateWithoutWaitlistEntriesInputObjectSchema as UserUncheckedCreateWithoutWaitlistEntriesInputObjectSchema } from './UserUncheckedCreateWithoutWaitlistEntriesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutWaitlistEntriesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWaitlistEntriesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutWaitlistEntriesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWaitlistEntriesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutWaitlistEntriesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutWaitlistEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutWaitlistEntriesInput>;
export const UserUpsertWithoutWaitlistEntriesInputObjectZodSchema = makeSchema();
