import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WaitlistEntryOrderByWithRelationInputObjectSchema as WaitlistEntryOrderByWithRelationInputObjectSchema } from './objects/WaitlistEntryOrderByWithRelationInput.schema';
import { WaitlistEntryWhereInputObjectSchema as WaitlistEntryWhereInputObjectSchema } from './objects/WaitlistEntryWhereInput.schema';
import { WaitlistEntryWhereUniqueInputObjectSchema as WaitlistEntryWhereUniqueInputObjectSchema } from './objects/WaitlistEntryWhereUniqueInput.schema';
import { WaitlistEntryCountAggregateInputObjectSchema as WaitlistEntryCountAggregateInputObjectSchema } from './objects/WaitlistEntryCountAggregateInput.schema';

export const WaitlistEntryCountSchema: z.ZodType<Prisma.WaitlistEntryCountArgs> = z.object({ orderBy: z.union([WaitlistEntryOrderByWithRelationInputObjectSchema, WaitlistEntryOrderByWithRelationInputObjectSchema.array()]).optional(), where: WaitlistEntryWhereInputObjectSchema.optional(), cursor: WaitlistEntryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WaitlistEntryCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.WaitlistEntryCountArgs>;

export const WaitlistEntryCountZodSchema = z.object({ orderBy: z.union([WaitlistEntryOrderByWithRelationInputObjectSchema, WaitlistEntryOrderByWithRelationInputObjectSchema.array()]).optional(), where: WaitlistEntryWhereInputObjectSchema.optional(), cursor: WaitlistEntryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WaitlistEntryCountAggregateInputObjectSchema ]).optional() }).strict();