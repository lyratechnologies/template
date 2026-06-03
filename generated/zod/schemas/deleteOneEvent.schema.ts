import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { EventSelectObjectSchema as EventSelectObjectSchema } from './objects/EventSelect.schema';
import { EventIncludeObjectSchema as EventIncludeObjectSchema } from './objects/EventInclude.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './objects/EventWhereUniqueInput.schema';

export const EventDeleteOneSchema: z.ZodType<Prisma.EventDeleteArgs> = z.object({ select: EventSelectObjectSchema.optional(), include: EventIncludeObjectSchema.optional(), where: EventWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EventDeleteArgs>;

export const EventDeleteOneZodSchema = z.object({ select: EventSelectObjectSchema.optional(), include: EventIncludeObjectSchema.optional(), where: EventWhereUniqueInputObjectSchema }).strict();