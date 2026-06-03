import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VerificationOrderByWithRelationInputObjectSchema as VerificationOrderByWithRelationInputObjectSchema } from './objects/VerificationOrderByWithRelationInput.schema';
import { VerificationWhereInputObjectSchema as VerificationWhereInputObjectSchema } from './objects/VerificationWhereInput.schema';
import { VerificationWhereUniqueInputObjectSchema as VerificationWhereUniqueInputObjectSchema } from './objects/VerificationWhereUniqueInput.schema';
import { VerificationScalarFieldEnumSchema } from './enums/VerificationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VerificationFindFirstOrThrowSelectSchema: z.ZodType<Prisma.VerificationSelect> = z.object({
    id: z.boolean().optional(),
    identifier: z.boolean().optional(),
    value: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.VerificationSelect>;

export const VerificationFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    identifier: z.boolean().optional(),
    value: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const VerificationFindFirstOrThrowSchema: z.ZodType<Prisma.VerificationFindFirstOrThrowArgs> = z.object({ select: VerificationFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([VerificationOrderByWithRelationInputObjectSchema, VerificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: VerificationWhereInputObjectSchema.optional(), cursor: VerificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VerificationScalarFieldEnumSchema, VerificationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.VerificationFindFirstOrThrowArgs>;

export const VerificationFindFirstOrThrowZodSchema = z.object({ select: VerificationFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([VerificationOrderByWithRelationInputObjectSchema, VerificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: VerificationWhereInputObjectSchema.optional(), cursor: VerificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VerificationScalarFieldEnumSchema, VerificationScalarFieldEnumSchema.array()]).optional() }).strict();