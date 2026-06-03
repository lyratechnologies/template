import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationStatusSchema } from '../enums/RegistrationStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  status: RegistrationStatusSchema.optional(),
  registeredAt: z.coerce.date().optional(),
  cancelledAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  eventId: z.string(),
  attendeeId: z.string()
}).strict();
export const RegistrationCreateManyInputObjectSchema: z.ZodType<Prisma.RegistrationCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationCreateManyInput>;
export const RegistrationCreateManyInputObjectZodSchema = makeSchema();
