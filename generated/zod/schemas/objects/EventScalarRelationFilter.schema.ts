import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => EventWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => EventWhereInputObjectSchema).optional()
}).strict();
export const EventScalarRelationFilterObjectSchema: z.ZodType<Prisma.EventScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EventScalarRelationFilter>;
export const EventScalarRelationFilterObjectZodSchema = makeSchema();
