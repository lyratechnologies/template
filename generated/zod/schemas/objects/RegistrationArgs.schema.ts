import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationSelectObjectSchema as RegistrationSelectObjectSchema } from './RegistrationSelect.schema';
import { RegistrationIncludeObjectSchema as RegistrationIncludeObjectSchema } from './RegistrationInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RegistrationSelectObjectSchema).optional(),
  include: z.lazy(() => RegistrationIncludeObjectSchema).optional()
}).strict();
export const RegistrationArgsObjectSchema = makeSchema();
export const RegistrationArgsObjectZodSchema = makeSchema();
