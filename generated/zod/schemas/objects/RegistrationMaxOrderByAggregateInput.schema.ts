import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  registeredAt: SortOrderSchema.optional(),
  cancelledAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  eventId: SortOrderSchema.optional(),
  attendeeId: SortOrderSchema.optional()
}).strict();
export const RegistrationMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RegistrationMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationMaxOrderByAggregateInput>;
export const RegistrationMaxOrderByAggregateInputObjectZodSchema = makeSchema();
