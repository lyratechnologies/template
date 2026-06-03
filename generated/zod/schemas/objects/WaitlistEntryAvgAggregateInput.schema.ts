import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  position: z.literal(true).optional()
}).strict();
export const WaitlistEntryAvgAggregateInputObjectSchema: z.ZodType<Prisma.WaitlistEntryAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryAvgAggregateInputType>;
export const WaitlistEntryAvgAggregateInputObjectZodSchema = makeSchema();
