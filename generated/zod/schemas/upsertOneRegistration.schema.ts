import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RegistrationSelectObjectSchema as RegistrationSelectObjectSchema } from './objects/RegistrationSelect.schema';
import { RegistrationIncludeObjectSchema as RegistrationIncludeObjectSchema } from './objects/RegistrationInclude.schema';
import { RegistrationWhereUniqueInputObjectSchema as RegistrationWhereUniqueInputObjectSchema } from './objects/RegistrationWhereUniqueInput.schema';
import { RegistrationCreateInputObjectSchema as RegistrationCreateInputObjectSchema } from './objects/RegistrationCreateInput.schema';
import { RegistrationUncheckedCreateInputObjectSchema as RegistrationUncheckedCreateInputObjectSchema } from './objects/RegistrationUncheckedCreateInput.schema';
import { RegistrationUpdateInputObjectSchema as RegistrationUpdateInputObjectSchema } from './objects/RegistrationUpdateInput.schema';
import { RegistrationUncheckedUpdateInputObjectSchema as RegistrationUncheckedUpdateInputObjectSchema } from './objects/RegistrationUncheckedUpdateInput.schema';

export const RegistrationUpsertOneSchema: z.ZodType<Prisma.RegistrationUpsertArgs> = z.object({ select: RegistrationSelectObjectSchema.optional(), include: RegistrationIncludeObjectSchema.optional(), where: RegistrationWhereUniqueInputObjectSchema, create: z.union([ RegistrationCreateInputObjectSchema, RegistrationUncheckedCreateInputObjectSchema ]), update: z.union([ RegistrationUpdateInputObjectSchema, RegistrationUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.RegistrationUpsertArgs>;

export const RegistrationUpsertOneZodSchema = z.object({ select: RegistrationSelectObjectSchema.optional(), include: RegistrationIncludeObjectSchema.optional(), where: RegistrationWhereUniqueInputObjectSchema, create: z.union([ RegistrationCreateInputObjectSchema, RegistrationUncheckedCreateInputObjectSchema ]), update: z.union([ RegistrationUpdateInputObjectSchema, RegistrationUncheckedUpdateInputObjectSchema ]) }).strict();