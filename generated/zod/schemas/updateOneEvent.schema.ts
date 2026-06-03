import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { EventSelectObjectSchema as EventSelectObjectSchema } from './objects/EventSelect.schema';
import { EventIncludeObjectSchema as EventIncludeObjectSchema } from './objects/EventInclude.schema';
import { EventUpdateInputObjectSchema as EventUpdateInputObjectSchema } from './objects/EventUpdateInput.schema';
import { EventUncheckedUpdateInputObjectSchema as EventUncheckedUpdateInputObjectSchema } from './objects/EventUncheckedUpdateInput.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './objects/EventWhereUniqueInput.schema';

export const EventUpdateOneSchema: z.ZodType<Prisma.EventUpdateArgs> = z.object({ select: EventSelectObjectSchema.optional(), include: EventIncludeObjectSchema.optional(), data: z.union([EventUpdateInputObjectSchema, EventUncheckedUpdateInputObjectSchema]), where: EventWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EventUpdateArgs>;

export const EventUpdateOneZodSchema = z.object({ select: EventSelectObjectSchema.optional(), include: EventIncludeObjectSchema.optional(), data: z.union([EventUpdateInputObjectSchema, EventUncheckedUpdateInputObjectSchema]), where: EventWhereUniqueInputObjectSchema }).strict();