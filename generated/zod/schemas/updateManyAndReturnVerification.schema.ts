import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VerificationSelectObjectSchema as VerificationSelectObjectSchema } from './objects/VerificationSelect.schema';
import { VerificationUpdateManyMutationInputObjectSchema as VerificationUpdateManyMutationInputObjectSchema } from './objects/VerificationUpdateManyMutationInput.schema';
import { VerificationWhereInputObjectSchema as VerificationWhereInputObjectSchema } from './objects/VerificationWhereInput.schema';

export const VerificationUpdateManyAndReturnSchema: z.ZodType<Prisma.VerificationUpdateManyAndReturnArgs> = z.object({ select: VerificationSelectObjectSchema.optional(), data: VerificationUpdateManyMutationInputObjectSchema, where: VerificationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VerificationUpdateManyAndReturnArgs>;

export const VerificationUpdateManyAndReturnZodSchema = z.object({ select: VerificationSelectObjectSchema.optional(), data: VerificationUpdateManyMutationInputObjectSchema, where: VerificationWhereInputObjectSchema.optional() }).strict();