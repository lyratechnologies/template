import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventCreateWithoutRegistrationsInputObjectSchema as EventCreateWithoutRegistrationsInputObjectSchema } from './EventCreateWithoutRegistrationsInput.schema';
import { EventUncheckedCreateWithoutRegistrationsInputObjectSchema as EventUncheckedCreateWithoutRegistrationsInputObjectSchema } from './EventUncheckedCreateWithoutRegistrationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EventCreateWithoutRegistrationsInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutRegistrationsInputObjectSchema)])
}).strict();
export const EventCreateOrConnectWithoutRegistrationsInputObjectSchema: z.ZodType<Prisma.EventCreateOrConnectWithoutRegistrationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateOrConnectWithoutRegistrationsInput>;
export const EventCreateOrConnectWithoutRegistrationsInputObjectZodSchema = makeSchema();
