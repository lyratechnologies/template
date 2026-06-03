import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserSelectObjectSchema as UserSelectObjectSchema } from './objects/UserSelect.schema';
import { UserIncludeObjectSchema as UserIncludeObjectSchema } from './objects/UserInclude.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema';

export const UserFindUniqueSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({ select: UserSelectObjectSchema.optional(), include: UserIncludeObjectSchema.optional(), where: UserWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserFindUniqueArgs>;

export const UserFindUniqueZodSchema = z.object({ select: UserSelectObjectSchema.optional(), include: UserIncludeObjectSchema.optional(), where: UserWhereUniqueInputObjectSchema }).strict();