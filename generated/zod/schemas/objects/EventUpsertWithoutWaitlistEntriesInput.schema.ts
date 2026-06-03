import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventUpdateWithoutWaitlistEntriesInputObjectSchema as EventUpdateWithoutWaitlistEntriesInputObjectSchema } from './EventUpdateWithoutWaitlistEntriesInput.schema';
import { EventUncheckedUpdateWithoutWaitlistEntriesInputObjectSchema as EventUncheckedUpdateWithoutWaitlistEntriesInputObjectSchema } from './EventUncheckedUpdateWithoutWaitlistEntriesInput.schema';
import { EventCreateWithoutWaitlistEntriesInputObjectSchema as EventCreateWithoutWaitlistEntriesInputObjectSchema } from './EventCreateWithoutWaitlistEntriesInput.schema';
import { EventUncheckedCreateWithoutWaitlistEntriesInputObjectSchema as EventUncheckedCreateWithoutWaitlistEntriesInputObjectSchema } from './EventUncheckedCreateWithoutWaitlistEntriesInput.schema';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => EventUpdateWithoutWaitlistEntriesInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutWaitlistEntriesInputObjectSchema)]),
  create: z.union([z.lazy(() => EventCreateWithoutWaitlistEntriesInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutWaitlistEntriesInputObjectSchema)]),
  where: z.lazy(() => EventWhereInputObjectSchema).optional()
}).strict();
export const EventUpsertWithoutWaitlistEntriesInputObjectSchema: z.ZodType<Prisma.EventUpsertWithoutWaitlistEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpsertWithoutWaitlistEntriesInput>;
export const EventUpsertWithoutWaitlistEntriesInputObjectZodSchema = makeSchema();
