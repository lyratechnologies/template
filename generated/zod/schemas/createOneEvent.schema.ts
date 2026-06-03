import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { EventSelectObjectSchema as EventSelectObjectSchema } from './objects/EventSelect.schema';
import { EventIncludeObjectSchema as EventIncludeObjectSchema } from './objects/EventInclude.schema';
import { EventCreateInputObjectSchema as EventCreateInputObjectSchema } from './objects/EventCreateInput.schema';
import { EventUncheckedCreateInputObjectSchema as EventUncheckedCreateInputObjectSchema } from './objects/EventUncheckedCreateInput.schema';

export const EventCreateOneSchema: z.ZodType<Prisma.EventCreateArgs> = z.object({ select: EventSelectObjectSchema.optional(), include: EventIncludeObjectSchema.optional(), data: z.union([EventCreateInputObjectSchema, EventUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.EventCreateArgs>;

export const EventCreateOneZodSchema = z.object({ select: EventSelectObjectSchema.optional(), include: EventIncludeObjectSchema.optional(), data: z.union([EventCreateInputObjectSchema, EventUncheckedCreateInputObjectSchema]) }).strict();