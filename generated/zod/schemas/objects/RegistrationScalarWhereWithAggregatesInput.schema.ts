import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumRegistrationStatusWithAggregatesFilterObjectSchema as EnumRegistrationStatusWithAggregatesFilterObjectSchema } from './EnumRegistrationStatusWithAggregatesFilter.schema';
import { RegistrationStatusSchema } from '../enums/RegistrationStatus.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const registrationscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => RegistrationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RegistrationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RegistrationScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RegistrationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RegistrationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumRegistrationStatusWithAggregatesFilterObjectSchema), RegistrationStatusSchema]).optional(),
  registeredAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  cancelledAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  eventId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  attendeeId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const RegistrationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.RegistrationScalarWhereWithAggregatesInput> = registrationscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.RegistrationScalarWhereWithAggregatesInput>;
export const RegistrationScalarWhereWithAggregatesInputObjectZodSchema = registrationscalarwherewithaggregatesinputSchema;
