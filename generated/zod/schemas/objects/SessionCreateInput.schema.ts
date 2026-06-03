import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutSessionsInputObjectSchema as UserCreateNestedOneWithoutSessionsInputObjectSchema } from './UserCreateNestedOneWithoutSessionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  expiresAt: z.coerce.date(),
  token: z.string(),
  createdAt: z.coerce.date().optional(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputObjectSchema)
}).strict();
export const SessionCreateInputObjectSchema: z.ZodType<Prisma.SessionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateInput>;
export const SessionCreateInputObjectZodSchema = makeSchema();
