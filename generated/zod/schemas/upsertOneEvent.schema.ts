import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { EventSelectObjectSchema as EventSelectObjectSchema } from './objects/EventSelect.schema';
import { EventIncludeObjectSchema as EventIncludeObjectSchema } from './objects/EventInclude.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './objects/EventWhereUniqueInput.schema';
import { EventCreateInputObjectSchema as EventCreateInputObjectSchema } from './objects/EventCreateInput.schema';
import { EventUncheckedCreateInputObjectSchema as EventUncheckedCreateInputObjectSchema } from './objects/EventUncheckedCreateInput.schema';
import { EventUpdateInputObjectSchema as EventUpdateInputObjectSchema } from './objects/EventUpdateInput.schema';
import { EventUncheckedUpdateInputObjectSchema as EventUncheckedUpdateInputObjectSchema } from './objects/EventUncheckedUpdateInput.schema';

export const EventUpsertOneSchema: z.ZodType<Prisma.EventUpsertArgs> = z.object({ select: EventSelectObjectSchema.optional(), include: EventIncludeObjectSchema.optional(), where: EventWhereUniqueInputObjectSchema, create: z.union([ EventCreateInputObjectSchema, EventUncheckedCreateInputObjectSchema ]), update: z.union([ EventUpdateInputObjectSchema, EventUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.EventUpsertArgs>;

export const EventUpsertOneZodSchema = z.object({ select: EventSelectObjectSchema.optional(), include: EventIncludeObjectSchema.optional(), where: EventWhereUniqueInputObjectSchema, create: z.union([ EventCreateInputObjectSchema, EventUncheckedCreateInputObjectSchema ]), update: z.union([ EventUpdateInputObjectSchema, EventUncheckedUpdateInputObjectSchema ]) }).strict();