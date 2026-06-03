import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { EventUpdateManyMutationInputObjectSchema as EventUpdateManyMutationInputObjectSchema } from './objects/EventUpdateManyMutationInput.schema';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './objects/EventWhereInput.schema';

export const EventUpdateManySchema: z.ZodType<Prisma.EventUpdateManyArgs> = z.object({ data: EventUpdateManyMutationInputObjectSchema, where: EventWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EventUpdateManyArgs>;

export const EventUpdateManyZodSchema = z.object({ data: EventUpdateManyMutationInputObjectSchema, where: EventWhereInputObjectSchema.optional() }).strict();