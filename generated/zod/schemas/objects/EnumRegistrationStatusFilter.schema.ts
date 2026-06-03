import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationStatusSchema } from '../enums/RegistrationStatus.schema';
import { NestedEnumRegistrationStatusFilterObjectSchema as NestedEnumRegistrationStatusFilterObjectSchema } from './NestedEnumRegistrationStatusFilter.schema'

const makeSchema = () => z.object({
  equals: RegistrationStatusSchema.optional(),
  in: RegistrationStatusSchema.array().optional(),
  notIn: RegistrationStatusSchema.array().optional(),
  not: z.union([RegistrationStatusSchema, z.lazy(() => NestedEnumRegistrationStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumRegistrationStatusFilterObjectSchema: z.ZodType<Prisma.EnumRegistrationStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumRegistrationStatusFilter>;
export const EnumRegistrationStatusFilterObjectZodSchema = makeSchema();
