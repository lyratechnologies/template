import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WaitlistEntryCreateWithoutEventInputObjectSchema as WaitlistEntryCreateWithoutEventInputObjectSchema } from './WaitlistEntryCreateWithoutEventInput.schema';
import { WaitlistEntryUncheckedCreateWithoutEventInputObjectSchema as WaitlistEntryUncheckedCreateWithoutEventInputObjectSchema } from './WaitlistEntryUncheckedCreateWithoutEventInput.schema';
import { WaitlistEntryCreateOrConnectWithoutEventInputObjectSchema as WaitlistEntryCreateOrConnectWithoutEventInputObjectSchema } from './WaitlistEntryCreateOrConnectWithoutEventInput.schema';
import { WaitlistEntryCreateManyEventInputEnvelopeObjectSchema as WaitlistEntryCreateManyEventInputEnvelopeObjectSchema } from './WaitlistEntryCreateManyEventInputEnvelope.schema';
import { WaitlistEntryWhereUniqueInputObjectSchema as WaitlistEntryWhereUniqueInputObjectSchema } from './WaitlistEntryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WaitlistEntryCreateWithoutEventInputObjectSchema), z.lazy(() => WaitlistEntryCreateWithoutEventInputObjectSchema).array(), z.lazy(() => WaitlistEntryUncheckedCreateWithoutEventInputObjectSchema), z.lazy(() => WaitlistEntryUncheckedCreateWithoutEventInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WaitlistEntryCreateOrConnectWithoutEventInputObjectSchema), z.lazy(() => WaitlistEntryCreateOrConnectWithoutEventInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WaitlistEntryCreateManyEventInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema), z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const WaitlistEntryCreateNestedManyWithoutEventInputObjectSchema: z.ZodType<Prisma.WaitlistEntryCreateNestedManyWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryCreateNestedManyWithoutEventInput>;
export const WaitlistEntryCreateNestedManyWithoutEventInputObjectZodSchema = makeSchema();
