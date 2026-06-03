import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { EventOrderByWithRelationInputObjectSchema as EventOrderByWithRelationInputObjectSchema } from './objects/EventOrderByWithRelationInput.schema';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './objects/EventWhereInput.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './objects/EventWhereUniqueInput.schema';
import { EventCountAggregateInputObjectSchema as EventCountAggregateInputObjectSchema } from './objects/EventCountAggregateInput.schema';

export const EventCountSchema: z.ZodType<Prisma.EventCountArgs> = z.object({ orderBy: z.union([EventOrderByWithRelationInputObjectSchema, EventOrderByWithRelationInputObjectSchema.array()]).optional(), where: EventWhereInputObjectSchema.optional(), cursor: EventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EventCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.EventCountArgs>;

export const EventCountZodSchema = z.object({ orderBy: z.union([EventOrderByWithRelationInputObjectSchema, EventOrderByWithRelationInputObjectSchema.array()]).optional(), where: EventWhereInputObjectSchema.optional(), cursor: EventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EventCountAggregateInputObjectSchema ]).optional() }).strict();