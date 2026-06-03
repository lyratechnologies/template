import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WaitlistEntrySelectObjectSchema as WaitlistEntrySelectObjectSchema } from './objects/WaitlistEntrySelect.schema';
import { WaitlistEntryIncludeObjectSchema as WaitlistEntryIncludeObjectSchema } from './objects/WaitlistEntryInclude.schema';
import { WaitlistEntryUpdateInputObjectSchema as WaitlistEntryUpdateInputObjectSchema } from './objects/WaitlistEntryUpdateInput.schema';
import { WaitlistEntryUncheckedUpdateInputObjectSchema as WaitlistEntryUncheckedUpdateInputObjectSchema } from './objects/WaitlistEntryUncheckedUpdateInput.schema';
import { WaitlistEntryWhereUniqueInputObjectSchema as WaitlistEntryWhereUniqueInputObjectSchema } from './objects/WaitlistEntryWhereUniqueInput.schema';

export const WaitlistEntryUpdateOneSchema: z.ZodType<Prisma.WaitlistEntryUpdateArgs> = z.object({ select: WaitlistEntrySelectObjectSchema.optional(), include: WaitlistEntryIncludeObjectSchema.optional(), data: z.union([WaitlistEntryUpdateInputObjectSchema, WaitlistEntryUncheckedUpdateInputObjectSchema]), where: WaitlistEntryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WaitlistEntryUpdateArgs>;

export const WaitlistEntryUpdateOneZodSchema = z.object({ select: WaitlistEntrySelectObjectSchema.optional(), include: WaitlistEntryIncludeObjectSchema.optional(), data: z.union([WaitlistEntryUpdateInputObjectSchema, WaitlistEntryUncheckedUpdateInputObjectSchema]), where: WaitlistEntryWhereUniqueInputObjectSchema }).strict();