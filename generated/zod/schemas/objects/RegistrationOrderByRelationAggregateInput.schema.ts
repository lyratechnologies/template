import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const RegistrationOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.RegistrationOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationOrderByRelationAggregateInput>;
export const RegistrationOrderByRelationAggregateInputObjectZodSchema = makeSchema();
