import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WaitlistEntryWhereInputObjectSchema as WaitlistEntryWhereInputObjectSchema } from './objects/WaitlistEntryWhereInput.schema';

export const WaitlistEntryDeleteManySchema: z.ZodType<Prisma.WaitlistEntryDeleteManyArgs> = z.object({ where: WaitlistEntryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WaitlistEntryDeleteManyArgs>;

export const WaitlistEntryDeleteManyZodSchema = z.object({ where: WaitlistEntryWhereInputObjectSchema.optional() }).strict();