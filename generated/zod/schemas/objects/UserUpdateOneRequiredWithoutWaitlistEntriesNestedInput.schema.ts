import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutWaitlistEntriesInputObjectSchema as UserCreateWithoutWaitlistEntriesInputObjectSchema } from './UserCreateWithoutWaitlistEntriesInput.schema';
import { UserUncheckedCreateWithoutWaitlistEntriesInputObjectSchema as UserUncheckedCreateWithoutWaitlistEntriesInputObjectSchema } from './UserUncheckedCreateWithoutWaitlistEntriesInput.schema';
import { UserCreateOrConnectWithoutWaitlistEntriesInputObjectSchema as UserCreateOrConnectWithoutWaitlistEntriesInputObjectSchema } from './UserCreateOrConnectWithoutWaitlistEntriesInput.schema';
import { UserUpsertWithoutWaitlistEntriesInputObjectSchema as UserUpsertWithoutWaitlistEntriesInputObjectSchema } from './UserUpsertWithoutWaitlistEntriesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutWaitlistEntriesInputObjectSchema as UserUpdateToOneWithWhereWithoutWaitlistEntriesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutWaitlistEntriesInput.schema';
import { UserUpdateWithoutWaitlistEntriesInputObjectSchema as UserUpdateWithoutWaitlistEntriesInputObjectSchema } from './UserUpdateWithoutWaitlistEntriesInput.schema';
import { UserUncheckedUpdateWithoutWaitlistEntriesInputObjectSchema as UserUncheckedUpdateWithoutWaitlistEntriesInputObjectSchema } from './UserUncheckedUpdateWithoutWaitlistEntriesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutWaitlistEntriesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWaitlistEntriesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWaitlistEntriesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutWaitlistEntriesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutWaitlistEntriesInputObjectSchema), z.lazy(() => UserUpdateWithoutWaitlistEntriesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWaitlistEntriesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutWaitlistEntriesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutWaitlistEntriesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutWaitlistEntriesNestedInput>;
export const UserUpdateOneRequiredWithoutWaitlistEntriesNestedInputObjectZodSchema = makeSchema();
