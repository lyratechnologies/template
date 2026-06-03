import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RegistrationOrderByRelationAggregateInputObjectSchema as RegistrationOrderByRelationAggregateInputObjectSchema } from './RegistrationOrderByRelationAggregateInput.schema';
import { WaitlistEntryOrderByRelationAggregateInputObjectSchema as WaitlistEntryOrderByRelationAggregateInputObjectSchema } from './WaitlistEntryOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  startsAt: SortOrderSchema.optional(),
  capacity: SortOrderSchema.optional(),
  registrationOpensAt: SortOrderSchema.optional(),
  registrationClosesAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  registrations: z.lazy(() => RegistrationOrderByRelationAggregateInputObjectSchema).optional(),
  waitlistEntries: z.lazy(() => WaitlistEntryOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const EventOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EventOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.EventOrderByWithRelationInput>;
export const EventOrderByWithRelationInputObjectZodSchema = makeSchema();
