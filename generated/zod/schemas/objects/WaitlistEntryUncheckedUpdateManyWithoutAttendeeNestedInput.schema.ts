import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WaitlistEntryCreateWithoutAttendeeInputObjectSchema as WaitlistEntryCreateWithoutAttendeeInputObjectSchema } from './WaitlistEntryCreateWithoutAttendeeInput.schema';
import { WaitlistEntryUncheckedCreateWithoutAttendeeInputObjectSchema as WaitlistEntryUncheckedCreateWithoutAttendeeInputObjectSchema } from './WaitlistEntryUncheckedCreateWithoutAttendeeInput.schema';
import { WaitlistEntryCreateOrConnectWithoutAttendeeInputObjectSchema as WaitlistEntryCreateOrConnectWithoutAttendeeInputObjectSchema } from './WaitlistEntryCreateOrConnectWithoutAttendeeInput.schema';
import { WaitlistEntryUpsertWithWhereUniqueWithoutAttendeeInputObjectSchema as WaitlistEntryUpsertWithWhereUniqueWithoutAttendeeInputObjectSchema } from './WaitlistEntryUpsertWithWhereUniqueWithoutAttendeeInput.schema';
import { WaitlistEntryCreateManyAttendeeInputEnvelopeObjectSchema as WaitlistEntryCreateManyAttendeeInputEnvelopeObjectSchema } from './WaitlistEntryCreateManyAttendeeInputEnvelope.schema';
import { WaitlistEntryWhereUniqueInputObjectSchema as WaitlistEntryWhereUniqueInputObjectSchema } from './WaitlistEntryWhereUniqueInput.schema';
import { WaitlistEntryUpdateWithWhereUniqueWithoutAttendeeInputObjectSchema as WaitlistEntryUpdateWithWhereUniqueWithoutAttendeeInputObjectSchema } from './WaitlistEntryUpdateWithWhereUniqueWithoutAttendeeInput.schema';
import { WaitlistEntryUpdateManyWithWhereWithoutAttendeeInputObjectSchema as WaitlistEntryUpdateManyWithWhereWithoutAttendeeInputObjectSchema } from './WaitlistEntryUpdateManyWithWhereWithoutAttendeeInput.schema';
import { WaitlistEntryScalarWhereInputObjectSchema as WaitlistEntryScalarWhereInputObjectSchema } from './WaitlistEntryScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WaitlistEntryCreateWithoutAttendeeInputObjectSchema), z.lazy(() => WaitlistEntryCreateWithoutAttendeeInputObjectSchema).array(), z.lazy(() => WaitlistEntryUncheckedCreateWithoutAttendeeInputObjectSchema), z.lazy(() => WaitlistEntryUncheckedCreateWithoutAttendeeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WaitlistEntryCreateOrConnectWithoutAttendeeInputObjectSchema), z.lazy(() => WaitlistEntryCreateOrConnectWithoutAttendeeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => WaitlistEntryUpsertWithWhereUniqueWithoutAttendeeInputObjectSchema), z.lazy(() => WaitlistEntryUpsertWithWhereUniqueWithoutAttendeeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WaitlistEntryCreateManyAttendeeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema), z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema), z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema), z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema), z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => WaitlistEntryUpdateWithWhereUniqueWithoutAttendeeInputObjectSchema), z.lazy(() => WaitlistEntryUpdateWithWhereUniqueWithoutAttendeeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => WaitlistEntryUpdateManyWithWhereWithoutAttendeeInputObjectSchema), z.lazy(() => WaitlistEntryUpdateManyWithWhereWithoutAttendeeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => WaitlistEntryScalarWhereInputObjectSchema), z.lazy(() => WaitlistEntryScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const WaitlistEntryUncheckedUpdateManyWithoutAttendeeNestedInputObjectSchema: z.ZodType<Prisma.WaitlistEntryUncheckedUpdateManyWithoutAttendeeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryUncheckedUpdateManyWithoutAttendeeNestedInput>;
export const WaitlistEntryUncheckedUpdateManyWithoutAttendeeNestedInputObjectZodSchema = makeSchema();
