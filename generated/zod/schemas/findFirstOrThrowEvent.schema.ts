import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { EventIncludeObjectSchema as EventIncludeObjectSchema } from './objects/EventInclude.schema';
import { EventOrderByWithRelationInputObjectSchema as EventOrderByWithRelationInputObjectSchema } from './objects/EventOrderByWithRelationInput.schema';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './objects/EventWhereInput.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './objects/EventWhereUniqueInput.schema';
import { EventScalarFieldEnumSchema } from './enums/EventScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EventFindFirstOrThrowSelectSchema: z.ZodType<Prisma.EventSelect> = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    startsAt: z.boolean().optional(),
    capacity: z.boolean().optional(),
    registrationOpensAt: z.boolean().optional(),
    registrationClosesAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    registrations: z.boolean().optional(),
    waitlistEntries: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.EventSelect>;

export const EventFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    startsAt: z.boolean().optional(),
    capacity: z.boolean().optional(),
    registrationOpensAt: z.boolean().optional(),
    registrationClosesAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    registrations: z.boolean().optional(),
    waitlistEntries: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const EventFindFirstOrThrowSchema: z.ZodType<Prisma.EventFindFirstOrThrowArgs> = z.object({ select: EventFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => EventIncludeObjectSchema.optional()), orderBy: z.union([EventOrderByWithRelationInputObjectSchema, EventOrderByWithRelationInputObjectSchema.array()]).optional(), where: EventWhereInputObjectSchema.optional(), cursor: EventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EventScalarFieldEnumSchema, EventScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.EventFindFirstOrThrowArgs>;

export const EventFindFirstOrThrowZodSchema = z.object({ select: EventFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => EventIncludeObjectSchema.optional()), orderBy: z.union([EventOrderByWithRelationInputObjectSchema, EventOrderByWithRelationInputObjectSchema.array()]).optional(), where: EventWhereInputObjectSchema.optional(), cursor: EventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EventScalarFieldEnumSchema, EventScalarFieldEnumSchema.array()]).optional() }).strict();