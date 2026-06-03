import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RegistrationSelectObjectSchema as RegistrationSelectObjectSchema } from './objects/RegistrationSelect.schema';
import { RegistrationIncludeObjectSchema as RegistrationIncludeObjectSchema } from './objects/RegistrationInclude.schema';
import { RegistrationCreateInputObjectSchema as RegistrationCreateInputObjectSchema } from './objects/RegistrationCreateInput.schema';
import { RegistrationUncheckedCreateInputObjectSchema as RegistrationUncheckedCreateInputObjectSchema } from './objects/RegistrationUncheckedCreateInput.schema';

export const RegistrationCreateOneSchema: z.ZodType<Prisma.RegistrationCreateArgs> = z.object({ select: RegistrationSelectObjectSchema.optional(), include: RegistrationIncludeObjectSchema.optional(), data: z.union([RegistrationCreateInputObjectSchema, RegistrationUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.RegistrationCreateArgs>;

export const RegistrationCreateOneZodSchema = z.object({ select: RegistrationSelectObjectSchema.optional(), include: RegistrationIncludeObjectSchema.optional(), data: z.union([RegistrationCreateInputObjectSchema, RegistrationUncheckedCreateInputObjectSchema]) }).strict();