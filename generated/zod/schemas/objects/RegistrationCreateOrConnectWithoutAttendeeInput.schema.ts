import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationWhereUniqueInputObjectSchema as RegistrationWhereUniqueInputObjectSchema } from './RegistrationWhereUniqueInput.schema';
import { RegistrationCreateWithoutAttendeeInputObjectSchema as RegistrationCreateWithoutAttendeeInputObjectSchema } from './RegistrationCreateWithoutAttendeeInput.schema';
import { RegistrationUncheckedCreateWithoutAttendeeInputObjectSchema as RegistrationUncheckedCreateWithoutAttendeeInputObjectSchema } from './RegistrationUncheckedCreateWithoutAttendeeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistrationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RegistrationCreateWithoutAttendeeInputObjectSchema), z.lazy(() => RegistrationUncheckedCreateWithoutAttendeeInputObjectSchema)])
}).strict();
export const RegistrationCreateOrConnectWithoutAttendeeInputObjectSchema: z.ZodType<Prisma.RegistrationCreateOrConnectWithoutAttendeeInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationCreateOrConnectWithoutAttendeeInput>;
export const RegistrationCreateOrConnectWithoutAttendeeInputObjectZodSchema = makeSchema();
