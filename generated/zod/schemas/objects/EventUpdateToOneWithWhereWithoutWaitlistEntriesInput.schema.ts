import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema';
import { EventUpdateWithoutWaitlistEntriesInputObjectSchema as EventUpdateWithoutWaitlistEntriesInputObjectSchema } from './EventUpdateWithoutWaitlistEntriesInput.schema';
import { EventUncheckedUpdateWithoutWaitlistEntriesInputObjectSchema as EventUncheckedUpdateWithoutWaitlistEntriesInputObjectSchema } from './EventUncheckedUpdateWithoutWaitlistEntriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EventUpdateWithoutWaitlistEntriesInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutWaitlistEntriesInputObjectSchema)])
}).strict();
export const EventUpdateToOneWithWhereWithoutWaitlistEntriesInputObjectSchema: z.ZodType<Prisma.EventUpdateToOneWithWhereWithoutWaitlistEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateToOneWithWhereWithoutWaitlistEntriesInput>;
export const EventUpdateToOneWithWhereWithoutWaitlistEntriesInputObjectZodSchema = makeSchema();
