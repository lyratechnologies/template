import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RegistrationUpdateManyMutationInputObjectSchema as RegistrationUpdateManyMutationInputObjectSchema } from './objects/RegistrationUpdateManyMutationInput.schema';
import { RegistrationWhereInputObjectSchema as RegistrationWhereInputObjectSchema } from './objects/RegistrationWhereInput.schema';

export const RegistrationUpdateManySchema: z.ZodType<Prisma.RegistrationUpdateManyArgs> = z.object({ data: RegistrationUpdateManyMutationInputObjectSchema, where: RegistrationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RegistrationUpdateManyArgs>;

export const RegistrationUpdateManyZodSchema = z.object({ data: RegistrationUpdateManyMutationInputObjectSchema, where: RegistrationWhereInputObjectSchema.optional() }).strict();