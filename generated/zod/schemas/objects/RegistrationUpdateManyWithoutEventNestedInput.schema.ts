import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationCreateWithoutEventInputObjectSchema as RegistrationCreateWithoutEventInputObjectSchema } from './RegistrationCreateWithoutEventInput.schema';
import { RegistrationUncheckedCreateWithoutEventInputObjectSchema as RegistrationUncheckedCreateWithoutEventInputObjectSchema } from './RegistrationUncheckedCreateWithoutEventInput.schema';
import { RegistrationCreateOrConnectWithoutEventInputObjectSchema as RegistrationCreateOrConnectWithoutEventInputObjectSchema } from './RegistrationCreateOrConnectWithoutEventInput.schema';
import { RegistrationUpsertWithWhereUniqueWithoutEventInputObjectSchema as RegistrationUpsertWithWhereUniqueWithoutEventInputObjectSchema } from './RegistrationUpsertWithWhereUniqueWithoutEventInput.schema';
import { RegistrationCreateManyEventInputEnvelopeObjectSchema as RegistrationCreateManyEventInputEnvelopeObjectSchema } from './RegistrationCreateManyEventInputEnvelope.schema';
import { RegistrationWhereUniqueInputObjectSchema as RegistrationWhereUniqueInputObjectSchema } from './RegistrationWhereUniqueInput.schema';
import { RegistrationUpdateWithWhereUniqueWithoutEventInputObjectSchema as RegistrationUpdateWithWhereUniqueWithoutEventInputObjectSchema } from './RegistrationUpdateWithWhereUniqueWithoutEventInput.schema';
import { RegistrationUpdateManyWithWhereWithoutEventInputObjectSchema as RegistrationUpdateManyWithWhereWithoutEventInputObjectSchema } from './RegistrationUpdateManyWithWhereWithoutEventInput.schema';
import { RegistrationScalarWhereInputObjectSchema as RegistrationScalarWhereInputObjectSchema } from './RegistrationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RegistrationCreateWithoutEventInputObjectSchema), z.lazy(() => RegistrationCreateWithoutEventInputObjectSchema).array(), z.lazy(() => RegistrationUncheckedCreateWithoutEventInputObjectSchema), z.lazy(() => RegistrationUncheckedCreateWithoutEventInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RegistrationCreateOrConnectWithoutEventInputObjectSchema), z.lazy(() => RegistrationCreateOrConnectWithoutEventInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RegistrationUpsertWithWhereUniqueWithoutEventInputObjectSchema), z.lazy(() => RegistrationUpsertWithWhereUniqueWithoutEventInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RegistrationCreateManyEventInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RegistrationWhereUniqueInputObjectSchema), z.lazy(() => RegistrationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RegistrationWhereUniqueInputObjectSchema), z.lazy(() => RegistrationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RegistrationWhereUniqueInputObjectSchema), z.lazy(() => RegistrationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RegistrationWhereUniqueInputObjectSchema), z.lazy(() => RegistrationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RegistrationUpdateWithWhereUniqueWithoutEventInputObjectSchema), z.lazy(() => RegistrationUpdateWithWhereUniqueWithoutEventInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RegistrationUpdateManyWithWhereWithoutEventInputObjectSchema), z.lazy(() => RegistrationUpdateManyWithWhereWithoutEventInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RegistrationScalarWhereInputObjectSchema), z.lazy(() => RegistrationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RegistrationUpdateManyWithoutEventNestedInputObjectSchema: z.ZodType<Prisma.RegistrationUpdateManyWithoutEventNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationUpdateManyWithoutEventNestedInput>;
export const RegistrationUpdateManyWithoutEventNestedInputObjectZodSchema = makeSchema();
