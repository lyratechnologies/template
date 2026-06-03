import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const EventWhereUniqueInputObjectSchema: z.ZodType<Prisma.EventWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.EventWhereUniqueInput>;
export const EventWhereUniqueInputObjectZodSchema = makeSchema();
