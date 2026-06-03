import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationCreateWithoutAttendeeInputObjectSchema as RegistrationCreateWithoutAttendeeInputObjectSchema } from './RegistrationCreateWithoutAttendeeInput.schema';
import { RegistrationUncheckedCreateWithoutAttendeeInputObjectSchema as RegistrationUncheckedCreateWithoutAttendeeInputObjectSchema } from './RegistrationUncheckedCreateWithoutAttendeeInput.schema';
import { RegistrationCreateOrConnectWithoutAttendeeInputObjectSchema as RegistrationCreateOrConnectWithoutAttendeeInputObjectSchema } from './RegistrationCreateOrConnectWithoutAttendeeInput.schema';
import { RegistrationCreateManyAttendeeInputEnvelopeObjectSchema as RegistrationCreateManyAttendeeInputEnvelopeObjectSchema } from './RegistrationCreateManyAttendeeInputEnvelope.schema';
import { RegistrationWhereUniqueInputObjectSchema as RegistrationWhereUniqueInputObjectSchema } from './RegistrationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RegistrationCreateWithoutAttendeeInputObjectSchema), z.lazy(() => RegistrationCreateWithoutAttendeeInputObjectSchema).array(), z.lazy(() => RegistrationUncheckedCreateWithoutAttendeeInputObjectSchema), z.lazy(() => RegistrationUncheckedCreateWithoutAttendeeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RegistrationCreateOrConnectWithoutAttendeeInputObjectSchema), z.lazy(() => RegistrationCreateOrConnectWithoutAttendeeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RegistrationCreateManyAttendeeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RegistrationWhereUniqueInputObjectSchema), z.lazy(() => RegistrationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RegistrationCreateNestedManyWithoutAttendeeInputObjectSchema: z.ZodType<Prisma.RegistrationCreateNestedManyWithoutAttendeeInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationCreateNestedManyWithoutAttendeeInput>;
export const RegistrationCreateNestedManyWithoutAttendeeInputObjectZodSchema = makeSchema();
