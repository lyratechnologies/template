import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RegistrationWhereInputObjectSchema as RegistrationWhereInputObjectSchema } from './objects/RegistrationWhereInput.schema';

export const RegistrationDeleteManySchema: z.ZodType<Prisma.RegistrationDeleteManyArgs> = z.object({ where: RegistrationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RegistrationDeleteManyArgs>;

export const RegistrationDeleteManyZodSchema = z.object({ where: RegistrationWhereInputObjectSchema.optional() }).strict();