import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  identifier: z.string(),
  value: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional()
}).strict();
export const VerificationUncheckedCreateInputObjectSchema: z.ZodType<Prisma.VerificationUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.VerificationUncheckedCreateInput>;
export const VerificationUncheckedCreateInputObjectZodSchema = makeSchema();
