import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { EventSelectObjectSchema as EventSelectObjectSchema } from './objects/EventSelect.schema';
import { EventIncludeObjectSchema as EventIncludeObjectSchema } from './objects/EventInclude.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './objects/EventWhereUniqueInput.schema';

export const EventFindUniqueSchema: z.ZodType<Prisma.EventFindUniqueArgs> = z.object({ select: EventSelectObjectSchema.optional(), include: EventIncludeObjectSchema.optional(), where: EventWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EventFindUniqueArgs>;

export const EventFindUniqueZodSchema = z.object({ select: EventSelectObjectSchema.optional(), include: EventIncludeObjectSchema.optional(), where: EventWhereUniqueInputObjectSchema }).strict();