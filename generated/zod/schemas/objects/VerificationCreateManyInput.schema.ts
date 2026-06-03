import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  identifier: z.string(),
  value: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const VerificationCreateManyInputObjectSchema: z.ZodType<Prisma.VerificationCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.VerificationCreateManyInput>;
export const VerificationCreateManyInputObjectZodSchema = makeSchema();
