import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationWhereInputObjectSchema as RegistrationWhereInputObjectSchema } from './RegistrationWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => RegistrationWhereInputObjectSchema).optional(),
  some: z.lazy(() => RegistrationWhereInputObjectSchema).optional(),
  none: z.lazy(() => RegistrationWhereInputObjectSchema).optional()
}).strict();
export const RegistrationListRelationFilterObjectSchema: z.ZodType<Prisma.RegistrationListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationListRelationFilter>;
export const RegistrationListRelationFilterObjectZodSchema = makeSchema();
