import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { EventOrderByWithRelationInputObjectSchema as EventOrderByWithRelationInputObjectSchema } from './objects/EventOrderByWithRelationInput.schema';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './objects/EventWhereInput.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './objects/EventWhereUniqueInput.schema';
import { EventCountAggregateInputObjectSchema as EventCountAggregateInputObjectSchema } from './objects/EventCountAggregateInput.schema';
import { EventMinAggregateInputObjectSchema as EventMinAggregateInputObjectSchema } from './objects/EventMinAggregateInput.schema';
import { EventMaxAggregateInputObjectSchema as EventMaxAggregateInputObjectSchema } from './objects/EventMaxAggregateInput.schema';
import { EventAvgAggregateInputObjectSchema as EventAvgAggregateInputObjectSchema } from './objects/EventAvgAggregateInput.schema';
import { EventSumAggregateInputObjectSchema as EventSumAggregateInputObjectSchema } from './objects/EventSumAggregateInput.schema';

export const EventAggregateSchema: z.ZodType<Prisma.EventAggregateArgs> = z.object({ orderBy: z.union([EventOrderByWithRelationInputObjectSchema, EventOrderByWithRelationInputObjectSchema.array()]).optional(), where: EventWhereInputObjectSchema.optional(), cursor: EventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), EventCountAggregateInputObjectSchema ]).optional(), _min: EventMinAggregateInputObjectSchema.optional(), _max: EventMaxAggregateInputObjectSchema.optional(), _avg: EventAvgAggregateInputObjectSchema.optional(), _sum: EventSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EventAggregateArgs>;

export const EventAggregateZodSchema = z.object({ orderBy: z.union([EventOrderByWithRelationInputObjectSchema, EventOrderByWithRelationInputObjectSchema.array()]).optional(), where: EventWhereInputObjectSchema.optional(), cursor: EventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), EventCountAggregateInputObjectSchema ]).optional(), _min: EventMinAggregateInputObjectSchema.optional(), _max: EventMaxAggregateInputObjectSchema.optional(), _avg: EventAvgAggregateInputObjectSchema.optional(), _sum: EventSumAggregateInputObjectSchema.optional() }).strict();