import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WaitlistEntrySelectObjectSchema as WaitlistEntrySelectObjectSchema } from './objects/WaitlistEntrySelect.schema';
import { WaitlistEntryIncludeObjectSchema as WaitlistEntryIncludeObjectSchema } from './objects/WaitlistEntryInclude.schema';
import { WaitlistEntryCreateInputObjectSchema as WaitlistEntryCreateInputObjectSchema } from './objects/WaitlistEntryCreateInput.schema';
import { WaitlistEntryUncheckedCreateInputObjectSchema as WaitlistEntryUncheckedCreateInputObjectSchema } from './objects/WaitlistEntryUncheckedCreateInput.schema';

export const WaitlistEntryCreateOneSchema: z.ZodType<Prisma.WaitlistEntryCreateArgs> = z.object({ select: WaitlistEntrySelectObjectSchema.optional(), include: WaitlistEntryIncludeObjectSchema.optional(), data: z.union([WaitlistEntryCreateInputObjectSchema, WaitlistEntryUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.WaitlistEntryCreateArgs>;

export const WaitlistEntryCreateOneZodSchema = z.object({ select: WaitlistEntrySelectObjectSchema.optional(), include: WaitlistEntryIncludeObjectSchema.optional(), data: z.union([WaitlistEntryCreateInputObjectSchema, WaitlistEntryUncheckedCreateInputObjectSchema]) }).strict();