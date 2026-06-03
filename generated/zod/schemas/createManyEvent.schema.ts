import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { EventCreateManyInputObjectSchema as EventCreateManyInputObjectSchema } from './objects/EventCreateManyInput.schema';

export const EventCreateManySchema: z.ZodType<Prisma.EventCreateManyArgs> = z.object({ data: z.union([ EventCreateManyInputObjectSchema, z.array(EventCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.EventCreateManyArgs>;

export const EventCreateManyZodSchema = z.object({ data: z.union([ EventCreateManyInputObjectSchema, z.array(EventCreateManyInputObjectSchema) ]),  }).strict();