import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema';
import { EventUpdateWithoutRegistrationsInputObjectSchema as EventUpdateWithoutRegistrationsInputObjectSchema } from './EventUpdateWithoutRegistrationsInput.schema';
import { EventUncheckedUpdateWithoutRegistrationsInputObjectSchema as EventUncheckedUpdateWithoutRegistrationsInputObjectSchema } from './EventUncheckedUpdateWithoutRegistrationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EventUpdateWithoutRegistrationsInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutRegistrationsInputObjectSchema)])
}).strict();
export const EventUpdateToOneWithWhereWithoutRegistrationsInputObjectSchema: z.ZodType<Prisma.EventUpdateToOneWithWhereWithoutRegistrationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateToOneWithWhereWithoutRegistrationsInput>;
export const EventUpdateToOneWithWhereWithoutRegistrationsInputObjectZodSchema = makeSchema();
