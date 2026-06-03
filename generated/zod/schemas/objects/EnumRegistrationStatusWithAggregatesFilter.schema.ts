import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationStatusSchema } from '../enums/RegistrationStatus.schema';
import { NestedEnumRegistrationStatusWithAggregatesFilterObjectSchema as NestedEnumRegistrationStatusWithAggregatesFilterObjectSchema } from './NestedEnumRegistrationStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumRegistrationStatusFilterObjectSchema as NestedEnumRegistrationStatusFilterObjectSchema } from './NestedEnumRegistrationStatusFilter.schema'

const makeSchema = () => z.object({
  equals: RegistrationStatusSchema.optional(),
  in: RegistrationStatusSchema.array().optional(),
  notIn: RegistrationStatusSchema.array().optional(),
  not: z.union([RegistrationStatusSchema, z.lazy(() => NestedEnumRegistrationStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumRegistrationStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumRegistrationStatusFilterObjectSchema).optional()
}).strict();
export const EnumRegistrationStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumRegistrationStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumRegistrationStatusWithAggregatesFilter>;
export const EnumRegistrationStatusWithAggregatesFilterObjectZodSchema = makeSchema();
