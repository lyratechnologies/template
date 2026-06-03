import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumRegistrationStatusFilterObjectSchema as EnumRegistrationStatusFilterObjectSchema } from './EnumRegistrationStatusFilter.schema';
import { RegistrationStatusSchema } from '../enums/RegistrationStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { EventScalarRelationFilterObjectSchema as EventScalarRelationFilterObjectSchema } from './EventScalarRelationFilter.schema';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const registrationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RegistrationWhereInputObjectSchema), z.lazy(() => RegistrationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RegistrationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RegistrationWhereInputObjectSchema), z.lazy(() => RegistrationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumRegistrationStatusFilterObjectSchema), RegistrationStatusSchema]).optional(),
  registeredAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  cancelledAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  eventId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  attendeeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  event: z.union([z.lazy(() => EventScalarRelationFilterObjectSchema), z.lazy(() => EventWhereInputObjectSchema)]).optional(),
  attendee: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const RegistrationWhereInputObjectSchema: z.ZodType<Prisma.RegistrationWhereInput> = registrationwhereinputSchema as unknown as z.ZodType<Prisma.RegistrationWhereInput>;
export const RegistrationWhereInputObjectZodSchema = registrationwhereinputSchema;
