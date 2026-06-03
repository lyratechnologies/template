import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { EventSelectObjectSchema as EventSelectObjectSchema } from './objects/EventSelect.schema';
import { EventIncludeObjectSchema as EventIncludeObjectSchema } from './objects/EventInclude.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './objects/EventWhereUniqueInput.schema';

export const EventFindUniqueOrThrowSchema: z.ZodType<Prisma.EventFindUniqueOrThrowArgs> = z.object({ select: EventSelectObjectSchema.optional(), include: EventIncludeObjectSchema.optional(), where: EventWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EventFindUniqueOrThrowArgs>;

export const EventFindUniqueOrThrowZodSchema = z.object({ select: EventSelectObjectSchema.optional(), include: EventIncludeObjectSchema.optional(), where: EventWhereUniqueInputObjectSchema }).strict();