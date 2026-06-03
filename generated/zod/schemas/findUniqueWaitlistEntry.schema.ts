import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WaitlistEntrySelectObjectSchema as WaitlistEntrySelectObjectSchema } from './objects/WaitlistEntrySelect.schema';
import { WaitlistEntryIncludeObjectSchema as WaitlistEntryIncludeObjectSchema } from './objects/WaitlistEntryInclude.schema';
import { WaitlistEntryWhereUniqueInputObjectSchema as WaitlistEntryWhereUniqueInputObjectSchema } from './objects/WaitlistEntryWhereUniqueInput.schema';

export const WaitlistEntryFindUniqueSchema: z.ZodType<Prisma.WaitlistEntryFindUniqueArgs> = z.object({ select: WaitlistEntrySelectObjectSchema.optional(), include: WaitlistEntryIncludeObjectSchema.optional(), where: WaitlistEntryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WaitlistEntryFindUniqueArgs>;

export const WaitlistEntryFindUniqueZodSchema = z.object({ select: WaitlistEntrySelectObjectSchema.optional(), include: WaitlistEntryIncludeObjectSchema.optional(), where: WaitlistEntryWhereUniqueInputObjectSchema }).strict();