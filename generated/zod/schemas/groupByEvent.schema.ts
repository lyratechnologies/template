import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './objects/EventWhereInput.schema';
import { EventOrderByWithAggregationInputObjectSchema as EventOrderByWithAggregationInputObjectSchema } from './objects/EventOrderByWithAggregationInput.schema';
import { EventScalarWhereWithAggregatesInputObjectSchema as EventScalarWhereWithAggregatesInputObjectSchema } from './objects/EventScalarWhereWithAggregatesInput.schema';
import { EventScalarFieldEnumSchema } from './enums/EventScalarFieldEnum.schema';
import { EventCountAggregateInputObjectSchema as EventCountAggregateInputObjectSchema } from './objects/EventCountAggregateInput.schema';
import { EventMinAggregateInputObjectSchema as EventMinAggregateInputObjectSchema } from './objects/EventMinAggregateInput.schema';
import { EventMaxAggregateInputObjectSchema as EventMaxAggregateInputObjectSchema } from './objects/EventMaxAggregateInput.schema';
import { EventAvgAggregateInputObjectSchema as EventAvgAggregateInputObjectSchema } from './objects/EventAvgAggregateInput.schema';
import { EventSumAggregateInputObjectSchema as EventSumAggregateInputObjectSchema } from './objects/EventSumAggregateInput.schema';

export const EventGroupBySchema: z.ZodType<Prisma.EventGroupByArgs> = z.object({ where: EventWhereInputObjectSchema.optional(), orderBy: z.union([EventOrderByWithAggregationInputObjectSchema, EventOrderByWithAggregationInputObjectSchema.array()]).optional(), having: EventScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(EventScalarFieldEnumSchema), _count: z.union([ z.literal(true), EventCountAggregateInputObjectSchema ]).optional(), _min: EventMinAggregateInputObjectSchema.optional(), _max: EventMaxAggregateInputObjectSchema.optional(), _avg: EventAvgAggregateInputObjectSchema.optional(), _sum: EventSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EventGroupByArgs>;

export const EventGroupByZodSchema = z.object({ where: EventWhereInputObjectSchema.optional(), orderBy: z.union([EventOrderByWithAggregationInputObjectSchema, EventOrderByWithAggregationInputObjectSchema.array()]).optional(), having: EventScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(EventScalarFieldEnumSchema), _count: z.union([ z.literal(true), EventCountAggregateInputObjectSchema ]).optional(), _min: EventMinAggregateInputObjectSchema.optional(), _max: EventMaxAggregateInputObjectSchema.optional(), _avg: EventAvgAggregateInputObjectSchema.optional(), _sum: EventSumAggregateInputObjectSchema.optional() }).strict();