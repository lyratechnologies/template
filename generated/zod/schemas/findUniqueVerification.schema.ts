import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VerificationSelectObjectSchema as VerificationSelectObjectSchema } from './objects/VerificationSelect.schema';
import { VerificationWhereUniqueInputObjectSchema as VerificationWhereUniqueInputObjectSchema } from './objects/VerificationWhereUniqueInput.schema';

export const VerificationFindUniqueSchema: z.ZodType<Prisma.VerificationFindUniqueArgs> = z.object({ select: VerificationSelectObjectSchema.optional(),  where: VerificationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VerificationFindUniqueArgs>;

export const VerificationFindUniqueZodSchema = z.object({ select: VerificationSelectObjectSchema.optional(),  where: VerificationWhereUniqueInputObjectSchema }).strict();