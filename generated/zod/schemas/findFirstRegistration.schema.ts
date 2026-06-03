import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RegistrationIncludeObjectSchema as RegistrationIncludeObjectSchema } from './objects/RegistrationInclude.schema';
import { RegistrationOrderByWithRelationInputObjectSchema as RegistrationOrderByWithRelationInputObjectSchema } from './objects/RegistrationOrderByWithRelationInput.schema';
import { RegistrationWhereInputObjectSchema as RegistrationWhereInputObjectSchema } from './objects/RegistrationWhereInput.schema';
import { RegistrationWhereUniqueInputObjectSchema as RegistrationWhereUniqueInputObjectSchema } from './objects/RegistrationWhereUniqueInput.schema';
import { RegistrationScalarFieldEnumSchema } from './enums/RegistrationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RegistrationFindFirstSelectSchema: z.ZodType<Prisma.RegistrationSelect> = z.object({
    id: z.boolean().optional(),
    status: z.boolean().optional(),
    registeredAt: z.boolean().optional(),
    cancelledAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    event: z.boolean().optional(),
    eventId: z.boolean().optional(),
    attendee: z.boolean().optional(),
    attendeeId: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RegistrationSelect>;

export const RegistrationFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    status: z.boolean().optional(),
    registeredAt: z.boolean().optional(),
    cancelledAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    event: z.boolean().optional(),
    eventId: z.boolean().optional(),
    attendee: z.boolean().optional(),
    attendeeId: z.boolean().optional()
  }).strict();

export const RegistrationFindFirstSchema: z.ZodType<Prisma.RegistrationFindFirstArgs> = z.object({ select: RegistrationFindFirstSelectSchema.optional(), include: z.lazy(() => RegistrationIncludeObjectSchema.optional()), orderBy: z.union([RegistrationOrderByWithRelationInputObjectSchema, RegistrationOrderByWithRelationInputObjectSchema.array()]).optional(), where: RegistrationWhereInputObjectSchema.optional(), cursor: RegistrationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RegistrationScalarFieldEnumSchema, RegistrationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RegistrationFindFirstArgs>;

export const RegistrationFindFirstZodSchema = z.object({ select: RegistrationFindFirstSelectSchema.optional(), include: z.lazy(() => RegistrationIncludeObjectSchema.optional()), orderBy: z.union([RegistrationOrderByWithRelationInputObjectSchema, RegistrationOrderByWithRelationInputObjectSchema.array()]).optional(), where: RegistrationWhereInputObjectSchema.optional(), cursor: RegistrationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RegistrationScalarFieldEnumSchema, RegistrationScalarFieldEnumSchema.array()]).optional() }).strict();