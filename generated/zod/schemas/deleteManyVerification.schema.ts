import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VerificationWhereInputObjectSchema as VerificationWhereInputObjectSchema } from './objects/VerificationWhereInput.schema';

export const VerificationDeleteManySchema: z.ZodType<Prisma.VerificationDeleteManyArgs> = z.object({ where: VerificationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VerificationDeleteManyArgs>;

export const VerificationDeleteManyZodSchema = z.object({ where: VerificationWhereInputObjectSchema.optional() }).strict();