import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationCreateManyAttendeeInputObjectSchema as RegistrationCreateManyAttendeeInputObjectSchema } from './RegistrationCreateManyAttendeeInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RegistrationCreateManyAttendeeInputObjectSchema), z.lazy(() => RegistrationCreateManyAttendeeInputObjectSchema).array()])
}).strict();
export const RegistrationCreateManyAttendeeInputEnvelopeObjectSchema: z.ZodType<Prisma.RegistrationCreateManyAttendeeInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationCreateManyAttendeeInputEnvelope>;
export const RegistrationCreateManyAttendeeInputEnvelopeObjectZodSchema = makeSchema();
