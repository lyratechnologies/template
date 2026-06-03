import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationStatusSchema } from '../enums/RegistrationStatus.schema'

const makeSchema = () => z.object({
  set: RegistrationStatusSchema.optional()
}).strict();
export const EnumRegistrationStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumRegistrationStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumRegistrationStatusFieldUpdateOperationsInput>;
export const EnumRegistrationStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
