import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  expiresAt: z.coerce.date(),
  token: z.string(),
  createdAt: z.coerce.date().optional(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  userId: z.string()
}).strict();
export const SessionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUncheckedCreateInput>;
export const SessionUncheckedCreateInputObjectZodSchema = makeSchema();
