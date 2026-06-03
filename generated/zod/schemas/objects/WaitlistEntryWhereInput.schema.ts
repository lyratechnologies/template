import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EventScalarRelationFilterObjectSchema as EventScalarRelationFilterObjectSchema } from './EventScalarRelationFilter.schema';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const waitlistentrywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WaitlistEntryWhereInputObjectSchema), z.lazy(() => WaitlistEntryWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WaitlistEntryWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WaitlistEntryWhereInputObjectSchema), z.lazy(() => WaitlistEntryWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  promotedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  cancelledAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  eventId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  attendeeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  event: z.union([z.lazy(() => EventScalarRelationFilterObjectSchema), z.lazy(() => EventWhereInputObjectSchema)]).optional(),
  attendee: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const WaitlistEntryWhereInputObjectSchema: z.ZodType<Prisma.WaitlistEntryWhereInput> = waitlistentrywhereinputSchema as unknown as z.ZodType<Prisma.WaitlistEntryWhereInput>;
export const WaitlistEntryWhereInputObjectZodSchema = waitlistentrywhereinputSchema;
