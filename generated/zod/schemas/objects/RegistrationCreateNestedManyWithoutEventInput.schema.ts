import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationCreateWithoutEventInputObjectSchema as RegistrationCreateWithoutEventInputObjectSchema } from './RegistrationCreateWithoutEventInput.schema';
import { RegistrationUncheckedCreateWithoutEventInputObjectSchema as RegistrationUncheckedCreateWithoutEventInputObjectSchema } from './RegistrationUncheckedCreateWithoutEventInput.schema';
import { RegistrationCreateOrConnectWithoutEventInputObjectSchema as RegistrationCreateOrConnectWithoutEventInputObjectSchema } from './RegistrationCreateOrConnectWithoutEventInput.schema';
import { RegistrationCreateManyEventInputEnvelopeObjectSchema as RegistrationCreateManyEventInputEnvelopeObjectSchema } from './RegistrationCreateManyEventInputEnvelope.schema';
import { RegistrationWhereUniqueInputObjectSchema as RegistrationWhereUniqueInputObjectSchema } from './RegistrationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RegistrationCreateWithoutEventInputObjectSchema), z.lazy(() => RegistrationCreateWithoutEventInputObjectSchema).array(), z.lazy(() => RegistrationUncheckedCreateWithoutEventInputObjectSchema), z.lazy(() => RegistrationUncheckedCreateWithoutEventInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RegistrationCreateOrConnectWithoutEventInputObjectSchema), z.lazy(() => RegistrationCreateOrConnectWithoutEventInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RegistrationCreateManyEventInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RegistrationWhereUniqueInputObjectSchema), z.lazy(() => RegistrationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RegistrationCreateNestedManyWithoutEventInputObjectSchema: z.ZodType<Prisma.RegistrationCreateNestedManyWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationCreateNestedManyWithoutEventInput>;
export const RegistrationCreateNestedManyWithoutEventInputObjectZodSchema = makeSchema();
