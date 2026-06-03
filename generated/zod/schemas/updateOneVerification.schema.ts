import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VerificationSelectObjectSchema as VerificationSelectObjectSchema } from './objects/VerificationSelect.schema';
import { VerificationUpdateInputObjectSchema as VerificationUpdateInputObjectSchema } from './objects/VerificationUpdateInput.schema';
import { VerificationUncheckedUpdateInputObjectSchema as VerificationUncheckedUpdateInputObjectSchema } from './objects/VerificationUncheckedUpdateInput.schema';
import { VerificationWhereUniqueInputObjectSchema as VerificationWhereUniqueInputObjectSchema } from './objects/VerificationWhereUniqueInput.schema';

export const VerificationUpdateOneSchema: z.ZodType<Prisma.VerificationUpdateArgs> = z.object({ select: VerificationSelectObjectSchema.optional(),  data: z.union([VerificationUpdateInputObjectSchema, VerificationUncheckedUpdateInputObjectSchema]), where: VerificationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VerificationUpdateArgs>;

export const VerificationUpdateOneZodSchema = z.object({ select: VerificationSelectObjectSchema.optional(),  data: z.union([VerificationUpdateInputObjectSchema, VerificationUncheckedUpdateInputObjectSchema]), where: VerificationWhereUniqueInputObjectSchema }).strict();