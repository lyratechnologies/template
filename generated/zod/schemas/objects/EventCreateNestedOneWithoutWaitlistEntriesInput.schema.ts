import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventCreateWithoutWaitlistEntriesInputObjectSchema as EventCreateWithoutWaitlistEntriesInputObjectSchema } from './EventCreateWithoutWaitlistEntriesInput.schema';
import { EventUncheckedCreateWithoutWaitlistEntriesInputObjectSchema as EventUncheckedCreateWithoutWaitlistEntriesInputObjectSchema } from './EventUncheckedCreateWithoutWaitlistEntriesInput.schema';
import { EventCreateOrConnectWithoutWaitlistEntriesInputObjectSchema as EventCreateOrConnectWithoutWaitlistEntriesInputObjectSchema } from './EventCreateOrConnectWithoutWaitlistEntriesInput.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCreateWithoutWaitlistEntriesInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutWaitlistEntriesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutWaitlistEntriesInputObjectSchema).optional(),
  connect: z.lazy(() => EventWhereUniqueInputObjectSchema).optional()
}).strict();
export const EventCreateNestedOneWithoutWaitlistEntriesInputObjectSchema: z.ZodType<Prisma.EventCreateNestedOneWithoutWaitlistEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateNestedOneWithoutWaitlistEntriesInput>;
export const EventCreateNestedOneWithoutWaitlistEntriesInputObjectZodSchema = makeSchema();
