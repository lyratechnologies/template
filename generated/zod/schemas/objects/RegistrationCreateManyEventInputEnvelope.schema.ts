import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationCreateManyEventInputObjectSchema as RegistrationCreateManyEventInputObjectSchema } from './RegistrationCreateManyEventInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RegistrationCreateManyEventInputObjectSchema), z.lazy(() => RegistrationCreateManyEventInputObjectSchema).array()])
}).strict();
export const RegistrationCreateManyEventInputEnvelopeObjectSchema: z.ZodType<Prisma.RegistrationCreateManyEventInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationCreateManyEventInputEnvelope>;
export const RegistrationCreateManyEventInputEnvelopeObjectZodSchema = makeSchema();
