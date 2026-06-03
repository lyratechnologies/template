import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './objects/EventWhereInput.schema';

export const EventDeleteManySchema: z.ZodType<Prisma.EventDeleteManyArgs> = z.object({ where: EventWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EventDeleteManyArgs>;

export const EventDeleteManyZodSchema = z.object({ where: EventWhereInputObjectSchema.optional() }).strict();