import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { AccountCreateManyUserInputObjectSchema as AccountCreateManyUserInputObjectSchema } from './AccountCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AccountCreateManyUserInputObjectSchema), z.lazy(() => AccountCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AccountCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AccountCreateManyUserInputEnvelope>;
export const AccountCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
