import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RegistrationStatusSchema } from '../enums/RegistrationStatus.schema';
import { EnumRegistrationStatusFieldUpdateOperationsInputObjectSchema as EnumRegistrationStatusFieldUpdateOperationsInputObjectSchema } from './EnumRegistrationStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { EventUpdateOneRequiredWithoutRegistrationsNestedInputObjectSchema as EventUpdateOneRequiredWithoutRegistrationsNestedInputObjectSchema } from './EventUpdateOneRequiredWithoutRegistrationsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([RegistrationStatusSchema, z.lazy(() => EnumRegistrationStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  registeredAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  cancelledAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  event: z.lazy(() => EventUpdateOneRequiredWithoutRegistrationsNestedInputObjectSchema).optional()
}).strict();
export const RegistrationUpdateWithoutAttendeeInputObjectSchema: z.ZodType<Prisma.RegistrationUpdateWithoutAttendeeInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationUpdateWithoutAttendeeInput>;
export const RegistrationUpdateWithoutAttendeeInputObjectZodSchema = makeSchema();
