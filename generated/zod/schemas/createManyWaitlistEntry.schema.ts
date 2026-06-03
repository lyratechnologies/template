import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WaitlistEntryCreateManyInputObjectSchema as WaitlistEntryCreateManyInputObjectSchema } from './objects/WaitlistEntryCreateManyInput.schema';

export const WaitlistEntryCreateManySchema: z.ZodType<Prisma.WaitlistEntryCreateManyArgs> = z.object({ data: z.union([ WaitlistEntryCreateManyInputObjectSchema, z.array(WaitlistEntryCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.WaitlistEntryCreateManyArgs>;

export const WaitlistEntryCreateManyZodSchema = z.object({ data: z.union([ WaitlistEntryCreateManyInputObjectSchema, z.array(WaitlistEntryCreateManyInputObjectSchema) ]),  }).strict();