import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VerificationCreateManyInputObjectSchema as VerificationCreateManyInputObjectSchema } from './objects/VerificationCreateManyInput.schema';

export const VerificationCreateManySchema: z.ZodType<Prisma.VerificationCreateManyArgs> = z.object({ data: z.union([ VerificationCreateManyInputObjectSchema, z.array(VerificationCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.VerificationCreateManyArgs>;

export const VerificationCreateManyZodSchema = z.object({ data: z.union([ VerificationCreateManyInputObjectSchema, z.array(VerificationCreateManyInputObjectSchema) ]),  }).strict();