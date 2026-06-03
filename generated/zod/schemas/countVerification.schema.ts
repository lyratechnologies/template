import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VerificationOrderByWithRelationInputObjectSchema as VerificationOrderByWithRelationInputObjectSchema } from './objects/VerificationOrderByWithRelationInput.schema';
import { VerificationWhereInputObjectSchema as VerificationWhereInputObjectSchema } from './objects/VerificationWhereInput.schema';
import { VerificationWhereUniqueInputObjectSchema as VerificationWhereUniqueInputObjectSchema } from './objects/VerificationWhereUniqueInput.schema';
import { VerificationCountAggregateInputObjectSchema as VerificationCountAggregateInputObjectSchema } from './objects/VerificationCountAggregateInput.schema';

export const VerificationCountSchema: z.ZodType<Prisma.VerificationCountArgs> = z.object({ orderBy: z.union([VerificationOrderByWithRelationInputObjectSchema, VerificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: VerificationWhereInputObjectSchema.optional(), cursor: VerificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), VerificationCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.VerificationCountArgs>;

export const VerificationCountZodSchema = z.object({ orderBy: z.union([VerificationOrderByWithRelationInputObjectSchema, VerificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: VerificationWhereInputObjectSchema.optional(), cursor: VerificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), VerificationCountAggregateInputObjectSchema ]).optional() }).strict();