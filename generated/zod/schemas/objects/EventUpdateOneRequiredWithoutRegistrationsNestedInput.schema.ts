import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventCreateWithoutRegistrationsInputObjectSchema as EventCreateWithoutRegistrationsInputObjectSchema } from './EventCreateWithoutRegistrationsInput.schema';
import { EventUncheckedCreateWithoutRegistrationsInputObjectSchema as EventUncheckedCreateWithoutRegistrationsInputObjectSchema } from './EventUncheckedCreateWithoutRegistrationsInput.schema';
import { EventCreateOrConnectWithoutRegistrationsInputObjectSchema as EventCreateOrConnectWithoutRegistrationsInputObjectSchema } from './EventCreateOrConnectWithoutRegistrationsInput.schema';
import { EventUpsertWithoutRegistrationsInputObjectSchema as EventUpsertWithoutRegistrationsInputObjectSchema } from './EventUpsertWithoutRegistrationsInput.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateToOneWithWhereWithoutRegistrationsInputObjectSchema as EventUpdateToOneWithWhereWithoutRegistrationsInputObjectSchema } from './EventUpdateToOneWithWhereWithoutRegistrationsInput.schema';
import { EventUpdateWithoutRegistrationsInputObjectSchema as EventUpdateWithoutRegistrationsInputObjectSchema } from './EventUpdateWithoutRegistrationsInput.schema';
import { EventUncheckedUpdateWithoutRegistrationsInputObjectSchema as EventUncheckedUpdateWithoutRegistrationsInputObjectSchema } from './EventUncheckedUpdateWithoutRegistrationsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCreateWithoutRegistrationsInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutRegistrationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutRegistrationsInputObjectSchema).optional(),
  upsert: z.lazy(() => EventUpsertWithoutRegistrationsInputObjectSchema).optional(),
  connect: z.lazy(() => EventWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EventUpdateToOneWithWhereWithoutRegistrationsInputObjectSchema), z.lazy(() => EventUpdateWithoutRegistrationsInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutRegistrationsInputObjectSchema)]).optional()
}).strict();
export const EventUpdateOneRequiredWithoutRegistrationsNestedInputObjectSchema: z.ZodType<Prisma.EventUpdateOneRequiredWithoutRegistrationsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateOneRequiredWithoutRegistrationsNestedInput>;
export const EventUpdateOneRequiredWithoutRegistrationsNestedInputObjectZodSchema = makeSchema();
