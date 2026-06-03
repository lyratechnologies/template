import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationCreateWithoutAttendeeInputObjectSchema as RegistrationCreateWithoutAttendeeInputObjectSchema } from './RegistrationCreateWithoutAttendeeInput.schema';
import { RegistrationUncheckedCreateWithoutAttendeeInputObjectSchema as RegistrationUncheckedCreateWithoutAttendeeInputObjectSchema } from './RegistrationUncheckedCreateWithoutAttendeeInput.schema';
import { RegistrationCreateOrConnectWithoutAttendeeInputObjectSchema as RegistrationCreateOrConnectWithoutAttendeeInputObjectSchema } from './RegistrationCreateOrConnectWithoutAttendeeInput.schema';
import { RegistrationUpsertWithWhereUniqueWithoutAttendeeInputObjectSchema as RegistrationUpsertWithWhereUniqueWithoutAttendeeInputObjectSchema } from './RegistrationUpsertWithWhereUniqueWithoutAttendeeInput.schema';
import { RegistrationCreateManyAttendeeInputEnvelopeObjectSchema as RegistrationCreateManyAttendeeInputEnvelopeObjectSchema } from './RegistrationCreateManyAttendeeInputEnvelope.schema';
import { RegistrationWhereUniqueInputObjectSchema as RegistrationWhereUniqueInputObjectSchema } from './RegistrationWhereUniqueInput.schema';
import { RegistrationUpdateWithWhereUniqueWithoutAttendeeInputObjectSchema as RegistrationUpdateWithWhereUniqueWithoutAttendeeInputObjectSchema } from './RegistrationUpdateWithWhereUniqueWithoutAttendeeInput.schema';
import { RegistrationUpdateManyWithWhereWithoutAttendeeInputObjectSchema as RegistrationUpdateManyWithWhereWithoutAttendeeInputObjectSchema } from './RegistrationUpdateManyWithWhereWithoutAttendeeInput.schema';
import { RegistrationScalarWhereInputObjectSchema as RegistrationScalarWhereInputObjectSchema } from './RegistrationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RegistrationCreateWithoutAttendeeInputObjectSchema), z.lazy(() => RegistrationCreateWithoutAttendeeInputObjectSchema).array(), z.lazy(() => RegistrationUncheckedCreateWithoutAttendeeInputObjectSchema), z.lazy(() => RegistrationUncheckedCreateWithoutAttendeeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RegistrationCreateOrConnectWithoutAttendeeInputObjectSchema), z.lazy(() => RegistrationCreateOrConnectWithoutAttendeeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RegistrationUpsertWithWhereUniqueWithoutAttendeeInputObjectSchema), z.lazy(() => RegistrationUpsertWithWhereUniqueWithoutAttendeeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RegistrationCreateManyAttendeeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RegistrationWhereUniqueInputObjectSchema), z.lazy(() => RegistrationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RegistrationWhereUniqueInputObjectSchema), z.lazy(() => RegistrationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RegistrationWhereUniqueInputObjectSchema), z.lazy(() => RegistrationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RegistrationWhereUniqueInputObjectSchema), z.lazy(() => RegistrationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RegistrationUpdateWithWhereUniqueWithoutAttendeeInputObjectSchema), z.lazy(() => RegistrationUpdateWithWhereUniqueWithoutAttendeeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RegistrationUpdateManyWithWhereWithoutAttendeeInputObjectSchema), z.lazy(() => RegistrationUpdateManyWithWhereWithoutAttendeeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RegistrationScalarWhereInputObjectSchema), z.lazy(() => RegistrationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RegistrationUpdateManyWithoutAttendeeNestedInputObjectSchema: z.ZodType<Prisma.RegistrationUpdateManyWithoutAttendeeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationUpdateManyWithoutAttendeeNestedInput>;
export const RegistrationUpdateManyWithoutAttendeeNestedInputObjectZodSchema = makeSchema();
