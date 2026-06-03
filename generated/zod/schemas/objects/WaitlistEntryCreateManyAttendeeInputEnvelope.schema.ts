import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WaitlistEntryCreateManyAttendeeInputObjectSchema as WaitlistEntryCreateManyAttendeeInputObjectSchema } from './WaitlistEntryCreateManyAttendeeInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WaitlistEntryCreateManyAttendeeInputObjectSchema), z.lazy(() => WaitlistEntryCreateManyAttendeeInputObjectSchema).array()])
}).strict();
export const WaitlistEntryCreateManyAttendeeInputEnvelopeObjectSchema: z.ZodType<Prisma.WaitlistEntryCreateManyAttendeeInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryCreateManyAttendeeInputEnvelope>;
export const WaitlistEntryCreateManyAttendeeInputEnvelopeObjectZodSchema = makeSchema();
