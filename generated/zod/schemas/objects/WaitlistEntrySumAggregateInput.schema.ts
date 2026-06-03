import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  position: z.literal(true).optional()
}).strict();
export const WaitlistEntrySumAggregateInputObjectSchema: z.ZodType<Prisma.WaitlistEntrySumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntrySumAggregateInputType>;
export const WaitlistEntrySumAggregateInputObjectZodSchema = makeSchema();
