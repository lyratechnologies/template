import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RegistrationCountOrderByAggregateInputObjectSchema as RegistrationCountOrderByAggregateInputObjectSchema } from './RegistrationCountOrderByAggregateInput.schema';
import { RegistrationMaxOrderByAggregateInputObjectSchema as RegistrationMaxOrderByAggregateInputObjectSchema } from './RegistrationMaxOrderByAggregateInput.schema';
import { RegistrationMinOrderByAggregateInputObjectSchema as RegistrationMinOrderByAggregateInputObjectSchema } from './RegistrationMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  registeredAt: SortOrderSchema.optional(),
  cancelledAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  eventId: SortOrderSchema.optional(),
  attendeeId: SortOrderSchema.optional(),
  _count: z.lazy(() => RegistrationCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => RegistrationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => RegistrationMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const RegistrationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.RegistrationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationOrderByWithAggregationInput>;
export const RegistrationOrderByWithAggregationInputObjectZodSchema = makeSchema();
