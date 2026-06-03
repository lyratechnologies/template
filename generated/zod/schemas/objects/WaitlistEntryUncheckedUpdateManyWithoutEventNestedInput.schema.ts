import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WaitlistEntryCreateWithoutEventInputObjectSchema as WaitlistEntryCreateWithoutEventInputObjectSchema } from './WaitlistEntryCreateWithoutEventInput.schema';
import { WaitlistEntryUncheckedCreateWithoutEventInputObjectSchema as WaitlistEntryUncheckedCreateWithoutEventInputObjectSchema } from './WaitlistEntryUncheckedCreateWithoutEventInput.schema';
import { WaitlistEntryCreateOrConnectWithoutEventInputObjectSchema as WaitlistEntryCreateOrConnectWithoutEventInputObjectSchema } from './WaitlistEntryCreateOrConnectWithoutEventInput.schema';
import { WaitlistEntryUpsertWithWhereUniqueWithoutEventInputObjectSchema as WaitlistEntryUpsertWithWhereUniqueWithoutEventInputObjectSchema } from './WaitlistEntryUpsertWithWhereUniqueWithoutEventInput.schema';
import { WaitlistEntryCreateManyEventInputEnvelopeObjectSchema as WaitlistEntryCreateManyEventInputEnvelopeObjectSchema } from './WaitlistEntryCreateManyEventInputEnvelope.schema';
import { WaitlistEntryWhereUniqueInputObjectSchema as WaitlistEntryWhereUniqueInputObjectSchema } from './WaitlistEntryWhereUniqueInput.schema';
import { WaitlistEntryUpdateWithWhereUniqueWithoutEventInputObjectSchema as WaitlistEntryUpdateWithWhereUniqueWithoutEventInputObjectSchema } from './WaitlistEntryUpdateWithWhereUniqueWithoutEventInput.schema';
import { WaitlistEntryUpdateManyWithWhereWithoutEventInputObjectSchema as WaitlistEntryUpdateManyWithWhereWithoutEventInputObjectSchema } from './WaitlistEntryUpdateManyWithWhereWithoutEventInput.schema';
import { WaitlistEntryScalarWhereInputObjectSchema as WaitlistEntryScalarWhereInputObjectSchema } from './WaitlistEntryScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WaitlistEntryCreateWithoutEventInputObjectSchema), z.lazy(() => WaitlistEntryCreateWithoutEventInputObjectSchema).array(), z.lazy(() => WaitlistEntryUncheckedCreateWithoutEventInputObjectSchema), z.lazy(() => WaitlistEntryUncheckedCreateWithoutEventInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WaitlistEntryCreateOrConnectWithoutEventInputObjectSchema), z.lazy(() => WaitlistEntryCreateOrConnectWithoutEventInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => WaitlistEntryUpsertWithWhereUniqueWithoutEventInputObjectSchema), z.lazy(() => WaitlistEntryUpsertWithWhereUniqueWithoutEventInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WaitlistEntryCreateManyEventInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema), z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema), z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema), z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema), z.lazy(() => WaitlistEntryWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => WaitlistEntryUpdateWithWhereUniqueWithoutEventInputObjectSchema), z.lazy(() => WaitlistEntryUpdateWithWhereUniqueWithoutEventInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => WaitlistEntryUpdateManyWithWhereWithoutEventInputObjectSchema), z.lazy(() => WaitlistEntryUpdateManyWithWhereWithoutEventInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => WaitlistEntryScalarWhereInputObjectSchema), z.lazy(() => WaitlistEntryScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const WaitlistEntryUncheckedUpdateManyWithoutEventNestedInputObjectSchema: z.ZodType<Prisma.WaitlistEntryUncheckedUpdateManyWithoutEventNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WaitlistEntryUncheckedUpdateManyWithoutEventNestedInput>;
export const WaitlistEntryUncheckedUpdateManyWithoutEventNestedInputObjectZodSchema = makeSchema();
