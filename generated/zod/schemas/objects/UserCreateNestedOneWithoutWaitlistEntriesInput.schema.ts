import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutWaitlistEntriesInputObjectSchema as UserCreateWithoutWaitlistEntriesInputObjectSchema } from './UserCreateWithoutWaitlistEntriesInput.schema';
import { UserUncheckedCreateWithoutWaitlistEntriesInputObjectSchema as UserUncheckedCreateWithoutWaitlistEntriesInputObjectSchema } from './UserUncheckedCreateWithoutWaitlistEntriesInput.schema';
import { UserCreateOrConnectWithoutWaitlistEntriesInputObjectSchema as UserCreateOrConnectWithoutWaitlistEntriesInputObjectSchema } from './UserCreateOrConnectWithoutWaitlistEntriesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutWaitlistEntriesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWaitlistEntriesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWaitlistEntriesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutWaitlistEntriesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutWaitlistEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutWaitlistEntriesInput>;
export const UserCreateNestedOneWithoutWaitlistEntriesInputObjectZodSchema = makeSchema();
