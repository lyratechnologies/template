import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { EventUpdateOneRequiredWithoutWaitlistEntriesNestedInputObjectSchema as EventUpdateOneRequiredWithoutWaitlistEntriesNestedInputObjectSchema } from './EventUpdateOneRequiredWithoutWaitlistEntriesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  promotedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cancelledAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  event: z.lazy(() => EventUpdateOneRequiredWithoutWaitlistEntriesNestedInputObjectSchema).optional()
}).strict();
export const WaitlistEntryUpdateWithoutAttendeeInputObjectSchema: z.ZodType<Prisma.WaitlistEntryUpdateWithoutAttendeeInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryUpdateWithoutAttendeeInput>;
export const WaitlistEntryUpdateWithoutAttendeeInputObjectZodSchema = makeSchema();
