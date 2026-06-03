import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RegistrationOrderByWithRelationInputObjectSchema as RegistrationOrderByWithRelationInputObjectSchema } from './objects/RegistrationOrderByWithRelationInput.schema';
import { RegistrationWhereInputObjectSchema as RegistrationWhereInputObjectSchema } from './objects/RegistrationWhereInput.schema';
import { RegistrationWhereUniqueInputObjectSchema as RegistrationWhereUniqueInputObjectSchema } from './objects/RegistrationWhereUniqueInput.schema';
import { RegistrationCountAggregateInputObjectSchema as RegistrationCountAggregateInputObjectSchema } from './objects/RegistrationCountAggregateInput.schema';

export const RegistrationCountSchema: z.ZodType<Prisma.RegistrationCountArgs> = z.object({ orderBy: z.union([RegistrationOrderByWithRelationInputObjectSchema, RegistrationOrderByWithRelationInputObjectSchema.array()]).optional(), where: RegistrationWhereInputObjectSchema.optional(), cursor: RegistrationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RegistrationCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.RegistrationCountArgs>;

export const RegistrationCountZodSchema = z.object({ orderBy: z.union([RegistrationOrderByWithRelationInputObjectSchema, RegistrationOrderByWithRelationInputObjectSchema.array()]).optional(), where: RegistrationWhereInputObjectSchema.optional(), cursor: RegistrationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RegistrationCountAggregateInputObjectSchema ]).optional() }).strict();