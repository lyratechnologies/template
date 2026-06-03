import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VerificationSelectObjectSchema as VerificationSelectObjectSchema } from './objects/VerificationSelect.schema';
import { VerificationCreateManyInputObjectSchema as VerificationCreateManyInputObjectSchema } from './objects/VerificationCreateManyInput.schema';

export const VerificationCreateManyAndReturnSchema: z.ZodType<Prisma.VerificationCreateManyAndReturnArgs> = z.object({ select: VerificationSelectObjectSchema.optional(), data: z.union([ VerificationCreateManyInputObjectSchema, z.array(VerificationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.VerificationCreateManyAndReturnArgs>;

export const VerificationCreateManyAndReturnZodSchema = z.object({ select: VerificationSelectObjectSchema.optional(), data: z.union([ VerificationCreateManyInputObjectSchema, z.array(VerificationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();