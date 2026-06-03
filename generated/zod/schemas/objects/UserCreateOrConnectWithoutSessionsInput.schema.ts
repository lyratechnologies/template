import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutSessionsInputObjectSchema as UserCreateWithoutSessionsInputObjectSchema } from './UserCreateWithoutSessionsInput.schema';
import { UserUncheckedCreateWithoutSessionsInputObjectSchema as UserUncheckedCreateWithoutSessionsInputObjectSchema } from './UserUncheckedCreateWithoutSessionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutSessionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSessionsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput>;
export const UserCreateOrConnectWithoutSessionsInputObjectZodSchema = makeSchema();
