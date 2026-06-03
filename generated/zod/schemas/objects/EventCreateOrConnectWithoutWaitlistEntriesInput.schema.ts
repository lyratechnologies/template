import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventCreateWithoutWaitlistEntriesInputObjectSchema as EventCreateWithoutWaitlistEntriesInputObjectSchema } from './EventCreateWithoutWaitlistEntriesInput.schema';
import { EventUncheckedCreateWithoutWaitlistEntriesInputObjectSchema as EventUncheckedCreateWithoutWaitlistEntriesInputObjectSchema } from './EventUncheckedCreateWithoutWaitlistEntriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EventCreateWithoutWaitlistEntriesInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutWaitlistEntriesInputObjectSchema)])
}).strict();
export const EventCreateOrConnectWithoutWaitlistEntriesInputObjectSchema: z.ZodType<Prisma.EventCreateOrConnectWithoutWaitlistEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateOrConnectWithoutWaitlistEntriesInput>;
export const EventCreateOrConnectWithoutWaitlistEntriesInputObjectZodSchema = makeSchema();
