import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventUpdateWithoutRegistrationsInputObjectSchema as EventUpdateWithoutRegistrationsInputObjectSchema } from './EventUpdateWithoutRegistrationsInput.schema';
import { EventUncheckedUpdateWithoutRegistrationsInputObjectSchema as EventUncheckedUpdateWithoutRegistrationsInputObjectSchema } from './EventUncheckedUpdateWithoutRegistrationsInput.schema';
import { EventCreateWithoutRegistrationsInputObjectSchema as EventCreateWithoutRegistrationsInputObjectSchema } from './EventCreateWithoutRegistrationsInput.schema';
import { EventUncheckedCreateWithoutRegistrationsInputObjectSchema as EventUncheckedCreateWithoutRegistrationsInputObjectSchema } from './EventUncheckedCreateWithoutRegistrationsInput.schema';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => EventUpdateWithoutRegistrationsInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutRegistrationsInputObjectSchema)]),
  create: z.union([z.lazy(() => EventCreateWithoutRegistrationsInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutRegistrationsInputObjectSchema)]),
  where: z.lazy(() => EventWhereInputObjectSchema).optional()
}).strict();
export const EventUpsertWithoutRegistrationsInputObjectSchema: z.ZodType<Prisma.EventUpsertWithoutRegistrationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpsertWithoutRegistrationsInput>;
export const EventUpsertWithoutRegistrationsInputObjectZodSchema = makeSchema();
