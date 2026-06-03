import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserSelectObjectSchema as UserSelectObjectSchema } from './objects/UserSelect.schema';
import { UserCreateManyInputObjectSchema as UserCreateManyInputObjectSchema } from './objects/UserCreateManyInput.schema';

export const UserCreateManyAndReturnSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs> = z.object({ select: UserSelectObjectSchema.optional(), data: z.union([ UserCreateManyInputObjectSchema, z.array(UserCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UserCreateManyAndReturnArgs>;

export const UserCreateManyAndReturnZodSchema = z.object({ select: UserSelectObjectSchema.optional(), data: z.union([ UserCreateManyInputObjectSchema, z.array(UserCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();