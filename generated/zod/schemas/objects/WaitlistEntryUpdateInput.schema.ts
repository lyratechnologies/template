import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { EventUpdateOneRequiredWithoutWaitlistEntriesNestedInputObjectSchema as EventUpdateOneRequiredWithoutWaitlistEntriesNestedInputObjectSchema } from './EventUpdateOneRequiredWithoutWaitlistEntriesNestedInput.schema';
import { UserUpdateOneRequiredWithoutWaitlistEntriesNestedInputObjectSchema as UserUpdateOneRequiredWithoutWaitlistEntriesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutWaitlistEntriesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  promotedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cancelledAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  event: z.lazy(() => EventUpdateOneRequiredWithoutWaitlistEntriesNestedInputObjectSchema).optional(),
  attendee: z.lazy(() => UserUpdateOneRequiredWithoutWaitlistEntriesNestedInputObjectSchema).optional()
}).strict();
export const WaitlistEntryUpdateInputObjectSchema: z.ZodType<Prisma.WaitlistEntryUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryUpdateInput>;
export const WaitlistEntryUpdateInputObjectZodSchema = makeSchema();
