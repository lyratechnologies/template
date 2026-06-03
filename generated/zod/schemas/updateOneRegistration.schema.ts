import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RegistrationSelectObjectSchema as RegistrationSelectObjectSchema } from './objects/RegistrationSelect.schema';
import { RegistrationIncludeObjectSchema as RegistrationIncludeObjectSchema } from './objects/RegistrationInclude.schema';
import { RegistrationUpdateInputObjectSchema as RegistrationUpdateInputObjectSchema } from './objects/RegistrationUpdateInput.schema';
import { RegistrationUncheckedUpdateInputObjectSchema as RegistrationUncheckedUpdateInputObjectSchema } from './objects/RegistrationUncheckedUpdateInput.schema';
import { RegistrationWhereUniqueInputObjectSchema as RegistrationWhereUniqueInputObjectSchema } from './objects/RegistrationWhereUniqueInput.schema';

export const RegistrationUpdateOneSchema: z.ZodType<Prisma.RegistrationUpdateArgs> = z.object({ select: RegistrationSelectObjectSchema.optional(), include: RegistrationIncludeObjectSchema.optional(), data: z.union([RegistrationUpdateInputObjectSchema, RegistrationUncheckedUpdateInputObjectSchema]), where: RegistrationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RegistrationUpdateArgs>;

export const RegistrationUpdateOneZodSchema = z.object({ select: RegistrationSelectObjectSchema.optional(), include: RegistrationIncludeObjectSchema.optional(), data: z.union([RegistrationUpdateInputObjectSchema, RegistrationUncheckedUpdateInputObjectSchema]), where: RegistrationWhereUniqueInputObjectSchema }).strict();