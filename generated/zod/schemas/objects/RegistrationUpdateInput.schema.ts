import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RegistrationStatusSchema } from '../enums/RegistrationStatus.schema';
import { EnumRegistrationStatusFieldUpdateOperationsInputObjectSchema as EnumRegistrationStatusFieldUpdateOperationsInputObjectSchema } from './EnumRegistrationStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { EventUpdateOneRequiredWithoutRegistrationsNestedInputObjectSchema as EventUpdateOneRequiredWithoutRegistrationsNestedInputObjectSchema } from './EventUpdateOneRequiredWithoutRegistrationsNestedInput.schema';
import { UserUpdateOneRequiredWithoutRegistrationsNestedInputObjectSchema as UserUpdateOneRequiredWithoutRegistrationsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutRegistrationsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([RegistrationStatusSchema, z.lazy(() => EnumRegistrationStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  registeredAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  cancelledAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  event: z.lazy(() => EventUpdateOneRequiredWithoutRegistrationsNestedInputObjectSchema).optional(),
  attendee: z.lazy(() => UserUpdateOneRequiredWithoutRegistrationsNestedInputObjectSchema).optional()
}).strict();
export const RegistrationUpdateInputObjectSchema: z.ZodType<Prisma.RegistrationUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationUpdateInput>;
export const RegistrationUpdateInputObjectZodSchema = makeSchema();
