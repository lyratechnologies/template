import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RegistrationSelectObjectSchema as RegistrationSelectObjectSchema } from './objects/RegistrationSelect.schema';
import { RegistrationIncludeObjectSchema as RegistrationIncludeObjectSchema } from './objects/RegistrationInclude.schema';
import { RegistrationWhereUniqueInputObjectSchema as RegistrationWhereUniqueInputObjectSchema } from './objects/RegistrationWhereUniqueInput.schema';

export const RegistrationDeleteOneSchema: z.ZodType<Prisma.RegistrationDeleteArgs> = z.object({ select: RegistrationSelectObjectSchema.optional(), include: RegistrationIncludeObjectSchema.optional(), where: RegistrationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RegistrationDeleteArgs>;

export const RegistrationDeleteOneZodSchema = z.object({ select: RegistrationSelectObjectSchema.optional(), include: RegistrationIncludeObjectSchema.optional(), where: RegistrationWhereUniqueInputObjectSchema }).strict();