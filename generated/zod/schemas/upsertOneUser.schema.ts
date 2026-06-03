import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserSelectObjectSchema as UserSelectObjectSchema } from './objects/UserSelect.schema';
import { UserIncludeObjectSchema as UserIncludeObjectSchema } from './objects/UserInclude.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema';
import { UserCreateInputObjectSchema as UserCreateInputObjectSchema } from './objects/UserCreateInput.schema';
import { UserUncheckedCreateInputObjectSchema as UserUncheckedCreateInputObjectSchema } from './objects/UserUncheckedCreateInput.schema';
import { UserUpdateInputObjectSchema as UserUpdateInputObjectSchema } from './objects/UserUpdateInput.schema';
import { UserUncheckedUpdateInputObjectSchema as UserUncheckedUpdateInputObjectSchema } from './objects/UserUncheckedUpdateInput.schema';

export const UserUpsertOneSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({ select: UserSelectObjectSchema.optional(), include: UserIncludeObjectSchema.optional(), where: UserWhereUniqueInputObjectSchema, create: z.union([ UserCreateInputObjectSchema, UserUncheckedCreateInputObjectSchema ]), update: z.union([ UserUpdateInputObjectSchema, UserUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.UserUpsertArgs>;

export const UserUpsertOneZodSchema = z.object({ select: UserSelectObjectSchema.optional(), include: UserIncludeObjectSchema.optional(), where: UserWhereUniqueInputObjectSchema, create: z.union([ UserCreateInputObjectSchema, UserUncheckedCreateInputObjectSchema ]), update: z.union([ UserUpdateInputObjectSchema, UserUncheckedUpdateInputObjectSchema ]) }).strict();