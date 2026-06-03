import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  token: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  ipAddress: z.boolean().optional(),
  userAgent: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const SessionSelectObjectSchema: z.ZodType<Prisma.SessionSelect> = makeSchema() as unknown as z.ZodType<Prisma.SessionSelect>;
export const SessionSelectObjectZodSchema = makeSchema();
