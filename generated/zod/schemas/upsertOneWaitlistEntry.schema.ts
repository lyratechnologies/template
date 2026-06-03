import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WaitlistEntrySelectObjectSchema as WaitlistEntrySelectObjectSchema } from './objects/WaitlistEntrySelect.schema';
import { WaitlistEntryIncludeObjectSchema as WaitlistEntryIncludeObjectSchema } from './objects/WaitlistEntryInclude.schema';
import { WaitlistEntryWhereUniqueInputObjectSchema as WaitlistEntryWhereUniqueInputObjectSchema } from './objects/WaitlistEntryWhereUniqueInput.schema';
import { WaitlistEntryCreateInputObjectSchema as WaitlistEntryCreateInputObjectSchema } from './objects/WaitlistEntryCreateInput.schema';
import { WaitlistEntryUncheckedCreateInputObjectSchema as WaitlistEntryUncheckedCreateInputObjectSchema } from './objects/WaitlistEntryUncheckedCreateInput.schema';
import { WaitlistEntryUpdateInputObjectSchema as WaitlistEntryUpdateInputObjectSchema } from './objects/WaitlistEntryUpdateInput.schema';
import { WaitlistEntryUncheckedUpdateInputObjectSchema as WaitlistEntryUncheckedUpdateInputObjectSchema } from './objects/WaitlistEntryUncheckedUpdateInput.schema';

export const WaitlistEntryUpsertOneSchema: z.ZodType<Prisma.WaitlistEntryUpsertArgs> = z.object({ select: WaitlistEntrySelectObjectSchema.optional(), include: WaitlistEntryIncludeObjectSchema.optional(), where: WaitlistEntryWhereUniqueInputObjectSchema, create: z.union([ WaitlistEntryCreateInputObjectSchema, WaitlistEntryUncheckedCreateInputObjectSchema ]), update: z.union([ WaitlistEntryUpdateInputObjectSchema, WaitlistEntryUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.WaitlistEntryUpsertArgs>;

export const WaitlistEntryUpsertOneZodSchema = z.object({ select: WaitlistEntrySelectObjectSchema.optional(), include: WaitlistEntryIncludeObjectSchema.optional(), where: WaitlistEntryWhereUniqueInputObjectSchema, create: z.union([ WaitlistEntryCreateInputObjectSchema, WaitlistEntryUncheckedCreateInputObjectSchema ]), update: z.union([ WaitlistEntryUpdateInputObjectSchema, WaitlistEntryUncheckedUpdateInputObjectSchema ]) }).strict();