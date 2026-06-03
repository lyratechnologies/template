import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WaitlistEntryCreateWithoutAttendeeInputObjectSchema as WaitlistEntryCreateWithoutAttendeeInputObjectSchema } from './WaitlistEntryCreateWithoutAttendeeInput.schema';
import { WaitlistEntryUncheckedCreateWithoutAttendeeInputObjectSchema as WaitlistEntryUncheckedCreateWithoutAttendeeInputObjectSchema } from './WaitlistEntryUncheckedCreateWithoutAttendeeInput.schema';
import { WaitlistEntryCreateOrConnectWithoutAttendeeInputObjectSchema as WaitlistEntryCreateOrConnectWithoutAttendeeInputObjectSchema } from './WaitlistEntryCreateOrConnectWithoutAttendeeInput.schema';
import { WaitlistEntryCreateManyAttendeeInputEnvelopeObjectSchema as WaitlistEntryCreateManyAttendeeInputEnvelopeObjectSchema } from './WaitlistEntryCreateManyAttendeeInputEnvelope.schema';
import { WaitlistEntryWhereUniqueInputObjectSchema as WaitlistEntryWhereUniqueInputObjectSchema } from './WaitlistEntryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WaitlistEntryCreateWithoutAttendeeInputObjectSchema), z.lazy(() => WaitlistEntryCreateWithoutAttendeeInputObjectSchema).array(), z.lazy(() => WaitlistEntryUncheckedCreateWithoutAttendeeInputObjectSchema), z.lazy(() => WaitlistEntryUncheckedCreateWithoutAttendeeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WaitlistEntryCreateOrConnectWithoutAttendeeInputObjectSchema), z.lazy(() => WaitlistEntryCreateOrConnectWithoutAttendeeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WaitlistEntryCreateManyAttendeeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema), z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const WaitlistEntryCreateNestedManyWithoutAttendeeInputObjectSchema: z.ZodType<Prisma.WaitlistEntryCreateNestedManyWithoutAttendeeInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryCreateNestedManyWithoutAttendeeInput>;
export const WaitlistEntryCreateNestedManyWithoutAttendeeInputObjectZodSchema = makeSchema();
