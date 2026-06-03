import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WaitlistEntryCreateManyEventInputObjectSchema as WaitlistEntryCreateManyEventInputObjectSchema } from './WaitlistEntryCreateManyEventInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WaitlistEntryCreateManyEventInputObjectSchema), z.lazy(() => WaitlistEntryCreateManyEventInputObjectSchema).array()])
}).strict();
export const WaitlistEntryCreateManyEventInputEnvelopeObjectSchema: z.ZodType<Prisma.WaitlistEntryCreateManyEventInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryCreateManyEventInputEnvelope>;
export const WaitlistEntryCreateManyEventInputEnvelopeObjectZodSchema = makeSchema();
