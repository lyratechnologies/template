import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationStatusSchema } from '../enums/RegistrationStatus.schema'

const nestedenumregistrationstatusfilterSchema = z.object({
  equals: RegistrationStatusSchema.optional(),
  in: RegistrationStatusSchema.array().optional(),
  notIn: RegistrationStatusSchema.array().optional(),
  not: z.union([RegistrationStatusSchema, z.lazy(() => NestedEnumRegistrationStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumRegistrationStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumRegistrationStatusFilter> = nestedenumregistrationstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumRegistrationStatusFilter>;
export const NestedEnumRegistrationStatusFilterObjectZodSchema = nestedenumregistrationstatusfilterSchema;
