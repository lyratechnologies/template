import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WaitlistEntryUpdateManyMutationInputObjectSchema as WaitlistEntryUpdateManyMutationInputObjectSchema } from './objects/WaitlistEntryUpdateManyMutationInput.schema';
import { WaitlistEntryWhereInputObjectSchema as WaitlistEntryWhereInputObjectSchema } from './objects/WaitlistEntryWhereInput.schema';

export const WaitlistEntryUpdateManySchema: z.ZodType<Prisma.WaitlistEntryUpdateManyArgs> = z.object({ data: WaitlistEntryUpdateManyMutationInputObjectSchema, where: WaitlistEntryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WaitlistEntryUpdateManyArgs>;

export const WaitlistEntryUpdateManyZodSchema = z.object({ data: WaitlistEntryUpdateManyMutationInputObjectSchema, where: WaitlistEntryWhereInputObjectSchema.optional() }).strict();