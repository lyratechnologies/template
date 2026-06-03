import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  expiresAt: z.coerce.date(),
  token: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable()
}).strict();
export const SessionUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput>;
export const SessionUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
