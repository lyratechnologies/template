import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const waitlistentryscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WaitlistEntryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WaitlistEntryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WaitlistEntryScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WaitlistEntryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WaitlistEntryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  promotedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  cancelledAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  eventId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  attendeeId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const WaitlistEntryScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.WaitlistEntryScalarWhereWithAggregatesInput> = waitlistentryscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.WaitlistEntryScalarWhereWithAggregatesInput>;
export const WaitlistEntryScalarWhereWithAggregatesInputObjectZodSchema = waitlistentryscalarwherewithaggregatesinputSchema;
