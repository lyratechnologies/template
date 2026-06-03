import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EventOrderByWithRelationInputObjectSchema as EventOrderByWithRelationInputObjectSchema } from './EventOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  registeredAt: SortOrderSchema.optional(),
  cancelledAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  eventId: SortOrderSchema.optional(),
  attendeeId: SortOrderSchema.optional(),
  event: z.lazy(() => EventOrderByWithRelationInputObjectSchema).optional(),
  attendee: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const RegistrationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.RegistrationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationOrderByWithRelationInput>;
export const RegistrationOrderByWithRelationInputObjectZodSchema = makeSchema();
