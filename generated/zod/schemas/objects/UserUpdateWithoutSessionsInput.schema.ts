import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AccountUpdateManyWithoutUserNestedInputObjectSchema as AccountUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUpdateManyWithoutUserNestedInput.schema';
import { RegistrationUpdateManyWithoutAttendeeNestedInputObjectSchema as RegistrationUpdateManyWithoutAttendeeNestedInputObjectSchema } from './RegistrationUpdateManyWithoutAttendeeNestedInput.schema';
import { WaitlistEntryUpdateManyWithoutAttendeeNestedInputObjectSchema as WaitlistEntryUpdateManyWithoutAttendeeNestedInputObjectSchema } from './WaitlistEntryUpdateManyWithoutAttendeeNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  registrations: z.lazy(() => RegistrationUpdateManyWithoutAttendeeNestedInputObjectSchema).optional(),
  waitlistEntries: z.lazy(() => WaitlistEntryUpdateManyWithoutAttendeeNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutSessionsInput>;
export const UserUpdateWithoutSessionsInputObjectZodSchema = makeSchema();
