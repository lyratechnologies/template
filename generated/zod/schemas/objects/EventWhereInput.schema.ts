import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { RegistrationListRelationFilterObjectSchema as RegistrationListRelationFilterObjectSchema } from './RegistrationListRelationFilter.schema';
import { WaitlistEntryListRelationFilterObjectSchema as WaitlistEntryListRelationFilterObjectSchema } from './WaitlistEntryListRelationFilter.schema'

const eventwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => EventWhereInputObjectSchema), z.lazy(() => EventWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EventWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EventWhereInputObjectSchema), z.lazy(() => EventWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  startsAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  capacity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  registrationOpensAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  registrationClosesAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  registrations: z.lazy(() => RegistrationListRelationFilterObjectSchema).optional(),
  waitlistEntries: z.lazy(() => WaitlistEntryListRelationFilterObjectSchema).optional()
}).strict();
export const EventWhereInputObjectSchema: z.ZodType<Prisma.EventWhereInput> = eventwhereinputSchema as unknown as z.ZodType<Prisma.EventWhereInput>;
export const EventWhereInputObjectZodSchema = eventwhereinputSchema;
