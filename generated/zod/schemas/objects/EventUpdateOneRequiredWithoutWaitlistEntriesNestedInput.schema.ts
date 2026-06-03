import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventCreateWithoutWaitlistEntriesInputObjectSchema as EventCreateWithoutWaitlistEntriesInputObjectSchema } from './EventCreateWithoutWaitlistEntriesInput.schema';
import { EventUncheckedCreateWithoutWaitlistEntriesInputObjectSchema as EventUncheckedCreateWithoutWaitlistEntriesInputObjectSchema } from './EventUncheckedCreateWithoutWaitlistEntriesInput.schema';
import { EventCreateOrConnectWithoutWaitlistEntriesInputObjectSchema as EventCreateOrConnectWithoutWaitlistEntriesInputObjectSchema } from './EventCreateOrConnectWithoutWaitlistEntriesInput.schema';
import { EventUpsertWithoutWaitlistEntriesInputObjectSchema as EventUpsertWithoutWaitlistEntriesInputObjectSchema } from './EventUpsertWithoutWaitlistEntriesInput.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateToOneWithWhereWithoutWaitlistEntriesInputObjectSchema as EventUpdateToOneWithWhereWithoutWaitlistEntriesInputObjectSchema } from './EventUpdateToOneWithWhereWithoutWaitlistEntriesInput.schema';
import { EventUpdateWithoutWaitlistEntriesInputObjectSchema as EventUpdateWithoutWaitlistEntriesInputObjectSchema } from './EventUpdateWithoutWaitlistEntriesInput.schema';
import { EventUncheckedUpdateWithoutWaitlistEntriesInputObjectSchema as EventUncheckedUpdateWithoutWaitlistEntriesInputObjectSchema } from './EventUncheckedUpdateWithoutWaitlistEntriesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCreateWithoutWaitlistEntriesInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutWaitlistEntriesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutWaitlistEntriesInputObjectSchema).optional(),
  upsert: z.lazy(() => EventUpsertWithoutWaitlistEntriesInputObjectSchema).optional(),
  connect: z.lazy(() => EventWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EventUpdateToOneWithWhereWithoutWaitlistEntriesInputObjectSchema), z.lazy(() => EventUpdateWithoutWaitlistEntriesInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutWaitlistEntriesInputObjectSchema)]).optional()
}).strict();
export const EventUpdateOneRequiredWithoutWaitlistEntriesNestedInputObjectSchema: z.ZodType<Prisma.EventUpdateOneRequiredWithoutWaitlistEntriesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateOneRequiredWithoutWaitlistEntriesNestedInput>;
export const EventUpdateOneRequiredWithoutWaitlistEntriesNestedInputObjectZodSchema = makeSchema();
