import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutWaitlistEntriesInputObjectSchema as UserCreateWithoutWaitlistEntriesInputObjectSchema } from './UserCreateWithoutWaitlistEntriesInput.schema';
import { UserUncheckedCreateWithoutWaitlistEntriesInputObjectSchema as UserUncheckedCreateWithoutWaitlistEntriesInputObjectSchema } from './UserUncheckedCreateWithoutWaitlistEntriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutWaitlistEntriesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWaitlistEntriesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutWaitlistEntriesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutWaitlistEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutWaitlistEntriesInput>;
export const UserCreateOrConnectWithoutWaitlistEntriesInputObjectZodSchema = makeSchema();
