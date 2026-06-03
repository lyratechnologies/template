import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserSelectObjectSchema as UserSelectObjectSchema } from './objects/UserSelect.schema';
import { UserIncludeObjectSchema as UserIncludeObjectSchema } from './objects/UserInclude.schema';
import { UserUpdateInputObjectSchema as UserUpdateInputObjectSchema } from './objects/UserUpdateInput.schema';
import { UserUncheckedUpdateInputObjectSchema as UserUncheckedUpdateInputObjectSchema } from './objects/UserUncheckedUpdateInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema';

export const UserUpdateOneSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({ select: UserSelectObjectSchema.optional(), include: UserIncludeObjectSchema.optional(), data: z.union([UserUpdateInputObjectSchema, UserUncheckedUpdateInputObjectSchema]), where: UserWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserUpdateArgs>;

export const UserUpdateOneZodSchema = z.object({ select: UserSelectObjectSchema.optional(), include: UserIncludeObjectSchema.optional(), data: z.union([UserUpdateInputObjectSchema, UserUncheckedUpdateInputObjectSchema]), where: UserWhereUniqueInputObjectSchema }).strict();