import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RegistrationSelectObjectSchema as RegistrationSelectObjectSchema } from './objects/RegistrationSelect.schema';
import { RegistrationIncludeObjectSchema as RegistrationIncludeObjectSchema } from './objects/RegistrationInclude.schema';
import { RegistrationWhereUniqueInputObjectSchema as RegistrationWhereUniqueInputObjectSchema } from './objects/RegistrationWhereUniqueInput.schema';

export const RegistrationFindUniqueSchema: z.ZodType<Prisma.RegistrationFindUniqueArgs> = z.object({ select: RegistrationSelectObjectSchema.optional(), include: RegistrationIncludeObjectSchema.optional(), where: RegistrationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RegistrationFindUniqueArgs>;

export const RegistrationFindUniqueZodSchema = z.object({ select: RegistrationSelectObjectSchema.optional(), include: RegistrationIncludeObjectSchema.optional(), where: RegistrationWhereUniqueInputObjectSchema }).strict();