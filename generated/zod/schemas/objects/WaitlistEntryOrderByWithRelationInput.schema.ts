import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EventOrderByWithRelationInputObjectSchema as EventOrderByWithRelationInputObjectSchema } from './EventOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  promotedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cancelledAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  eventId: SortOrderSchema.optional(),
  attendeeId: SortOrderSchema.optional(),
  event: z.lazy(() => EventOrderByWithRelationInputObjectSchema).optional(),
  attendee: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const WaitlistEntryOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WaitlistEntryOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryOrderByWithRelationInput>;
export const WaitlistEntryOrderByWithRelationInputObjectZodSchema = makeSchema();
