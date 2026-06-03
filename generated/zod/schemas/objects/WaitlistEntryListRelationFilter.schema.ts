import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WaitlistEntryWhereInputObjectSchema as WaitlistEntryWhereInputObjectSchema } from './WaitlistEntryWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => WaitlistEntryWhereInputObjectSchema).optional(),
  some: z.lazy(() => WaitlistEntryWhereInputObjectSchema).optional(),
  none: z.lazy(() => WaitlistEntryWhereInputObjectSchema).optional()
}).strict();
export const WaitlistEntryListRelationFilterObjectSchema: z.ZodType<Prisma.WaitlistEntryListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryListRelationFilter>;
export const WaitlistEntryListRelationFilterObjectZodSchema = makeSchema();
