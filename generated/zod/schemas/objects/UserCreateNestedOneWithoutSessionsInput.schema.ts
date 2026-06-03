import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutSessionsInputObjectSchema as UserCreateWithoutSessionsInputObjectSchema } from './UserCreateWithoutSessionsInput.schema';
import { UserUncheckedCreateWithoutSessionsInputObjectSchema as UserUncheckedCreateWithoutSessionsInputObjectSchema } from './UserUncheckedCreateWithoutSessionsInput.schema';
import { UserCreateOrConnectWithoutSessionsInputObjectSchema as UserCreateOrConnectWithoutSessionsInputObjectSchema } from './UserCreateOrConnectWithoutSessionsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutSessionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSessionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput>;
export const UserCreateNestedOneWithoutSessionsInputObjectZodSchema = makeSchema();
