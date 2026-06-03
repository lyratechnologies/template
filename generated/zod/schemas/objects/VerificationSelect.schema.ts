import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  identifier: z.boolean().optional(),
  value: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const VerificationSelectObjectSchema: z.ZodType<Prisma.VerificationSelect> = makeSchema() as unknown as z.ZodType<Prisma.VerificationSelect>;
export const VerificationSelectObjectZodSchema = makeSchema();
