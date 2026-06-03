import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumRegistrationStatusFilterObjectSchema as EnumRegistrationStatusFilterObjectSchema } from './EnumRegistrationStatusFilter.schema';
import { RegistrationStatusSchema } from '../enums/RegistrationStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const registrationscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RegistrationScalarWhereInputObjectSchema), z.lazy(() => RegistrationScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RegistrationScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RegistrationScalarWhereInputObjectSchema), z.lazy(() => RegistrationScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumRegistrationStatusFilterObjectSchema), RegistrationStatusSchema]).optional(),
  registeredAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  cancelledAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  eventId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  attendeeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const RegistrationScalarWhereInputObjectSchema: z.ZodType<Prisma.RegistrationScalarWhereInput> = registrationscalarwhereinputSchema as unknown as z.ZodType<Prisma.RegistrationScalarWhereInput>;
export const RegistrationScalarWhereInputObjectZodSchema = registrationscalarwhereinputSchema;
