import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VerificationUpdateManyMutationInputObjectSchema as VerificationUpdateManyMutationInputObjectSchema } from './objects/VerificationUpdateManyMutationInput.schema';
import { VerificationWhereInputObjectSchema as VerificationWhereInputObjectSchema } from './objects/VerificationWhereInput.schema';

export const VerificationUpdateManySchema: z.ZodType<Prisma.VerificationUpdateManyArgs> = z.object({ data: VerificationUpdateManyMutationInputObjectSchema, where: VerificationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VerificationUpdateManyArgs>;

export const VerificationUpdateManyZodSchema = z.object({ data: VerificationUpdateManyMutationInputObjectSchema, where: VerificationWhereInputObjectSchema.optional() }).strict();