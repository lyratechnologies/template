import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventCreateWithoutRegistrationsInputObjectSchema as EventCreateWithoutRegistrationsInputObjectSchema } from './EventCreateWithoutRegistrationsInput.schema';
import { EventUncheckedCreateWithoutRegistrationsInputObjectSchema as EventUncheckedCreateWithoutRegistrationsInputObjectSchema } from './EventUncheckedCreateWithoutRegistrationsInput.schema';
import { EventCreateOrConnectWithoutRegistrationsInputObjectSchema as EventCreateOrConnectWithoutRegistrationsInputObjectSchema } from './EventCreateOrConnectWithoutRegistrationsInput.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCreateWithoutRegistrationsInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutRegistrationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutRegistrationsInputObjectSchema).optional(),
  connect: z.lazy(() => EventWhereUniqueInputObjectSchema).optional()
}).strict();
export const EventCreateNestedOneWithoutRegistrationsInputObjectSchema: z.ZodType<Prisma.EventCreateNestedOneWithoutRegistrationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateNestedOneWithoutRegistrationsInput>;
export const EventCreateNestedOneWithoutRegistrationsInputObjectZodSchema = makeSchema();
