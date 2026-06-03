import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  capacity: z.literal(true).optional()
}).strict();
export const EventSumAggregateInputObjectSchema: z.ZodType<Prisma.EventSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EventSumAggregateInputType>;
export const EventSumAggregateInputObjectZodSchema = makeSchema();
