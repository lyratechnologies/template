import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const waitlistentryscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WaitlistEntryScalarWhereInputObjectSchema), z.lazy(() => WaitlistEntryScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WaitlistEntryScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WaitlistEntryScalarWhereInputObjectSchema), z.lazy(() => WaitlistEntryScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  promotedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  cancelledAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  eventId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  attendeeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const WaitlistEntryScalarWhereInputObjectSchema: z.ZodType<Prisma.WaitlistEntryScalarWhereInput> = waitlistentryscalarwhereinputSchema as unknown as z.ZodType<Prisma.WaitlistEntryScalarWhereInput>;
export const WaitlistEntryScalarWhereInputObjectZodSchema = waitlistentryscalarwhereinputSchema;
