import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { WaitlistEntryUncheckedUpdateManyWithoutEventNestedInputObjectSchema as WaitlistEntryUncheckedUpdateManyWithoutEventNestedInputObjectSchema } from './WaitlistEntryUncheckedUpdateManyWithoutEventNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  startsAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  capacity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  registrationOpensAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  registrationClosesAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  waitlistEntries: z.lazy(() => WaitlistEntryUncheckedUpdateManyWithoutEventNestedInputObjectSchema).optional()
}).strict();
export const EventUncheckedUpdateWithoutRegistrationsInputObjectSchema: z.ZodType<Prisma.EventUncheckedUpdateWithoutRegistrationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUncheckedUpdateWithoutRegistrationsInput>;
export const EventUncheckedUpdateWithoutRegistrationsInputObjectZodSchema = makeSchema();
