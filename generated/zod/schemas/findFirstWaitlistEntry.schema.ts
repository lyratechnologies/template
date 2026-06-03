import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WaitlistEntryIncludeObjectSchema as WaitlistEntryIncludeObjectSchema } from './objects/WaitlistEntryInclude.schema';
import { WaitlistEntryOrderByWithRelationInputObjectSchema as WaitlistEntryOrderByWithRelationInputObjectSchema } from './objects/WaitlistEntryOrderByWithRelationInput.schema';
import { WaitlistEntryWhereInputObjectSchema as WaitlistEntryWhereInputObjectSchema } from './objects/WaitlistEntryWhereInput.schema';
import { WaitlistEntryWhereUniqueInputObjectSchema as WaitlistEntryWhereUniqueInputObjectSchema } from './objects/WaitlistEntryWhereUniqueInput.schema';
import { WaitlistEntryScalarFieldEnumSchema } from './enums/WaitlistEntryScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WaitlistEntryFindFirstSelectSchema: z.ZodType<Prisma.WaitlistEntrySelect> = z.object({
    id: z.boolean().optional(),
    position: z.boolean().optional(),
    promotedAt: z.boolean().optional(),
    cancelledAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    event: z.boolean().optional(),
    eventId: z.boolean().optional(),
    attendee: z.boolean().optional(),
    attendeeId: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.WaitlistEntrySelect>;

export const WaitlistEntryFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    position: z.boolean().optional(),
    promotedAt: z.boolean().optional(),
    cancelledAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    event: z.boolean().optional(),
    eventId: z.boolean().optional(),
    attendee: z.boolean().optional(),
    attendeeId: z.boolean().optional()
  }).strict();

export const WaitlistEntryFindFirstSchema: z.ZodType<Prisma.WaitlistEntryFindFirstArgs> = z.object({ select: WaitlistEntryFindFirstSelectSchema.optional(), include: z.lazy(() => WaitlistEntryIncludeObjectSchema.optional()), orderBy: z.union([WaitlistEntryOrderByWithRelationInputObjectSchema, WaitlistEntryOrderByWithRelationInputObjectSchema.array()]).optional(), where: WaitlistEntryWhereInputObjectSchema.optional(), cursor: WaitlistEntryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WaitlistEntryScalarFieldEnumSchema, WaitlistEntryScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.WaitlistEntryFindFirstArgs>;

export const WaitlistEntryFindFirstZodSchema = z.object({ select: WaitlistEntryFindFirstSelectSchema.optional(), include: z.lazy(() => WaitlistEntryIncludeObjectSchema.optional()), orderBy: z.union([WaitlistEntryOrderByWithRelationInputObjectSchema, WaitlistEntryOrderByWithRelationInputObjectSchema.array()]).optional(), where: WaitlistEntryWhereInputObjectSchema.optional(), cursor: WaitlistEntryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WaitlistEntryScalarFieldEnumSchema, WaitlistEntryScalarFieldEnumSchema.array()]).optional() }).strict();