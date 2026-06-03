import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserSelectObjectSchema as UserSelectObjectSchema } from './objects/UserSelect.schema';
import { UserIncludeObjectSchema as UserIncludeObjectSchema } from './objects/UserInclude.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema';

export const UserDeleteOneSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({ select: UserSelectObjectSchema.optional(), include: UserIncludeObjectSchema.optional(), where: UserWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserDeleteArgs>;

export const UserDeleteOneZodSchema = z.object({ select: UserSelectObjectSchema.optional(), include: UserIncludeObjectSchema.optional(), where: UserWhereUniqueInputObjectSchema }).strict();