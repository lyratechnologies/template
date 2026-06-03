import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VerificationSelectObjectSchema as VerificationSelectObjectSchema } from './VerificationSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => VerificationSelectObjectSchema).optional()
}).strict();
export const VerificationArgsObjectSchema = makeSchema();
export const VerificationArgsObjectZodSchema = makeSchema();
