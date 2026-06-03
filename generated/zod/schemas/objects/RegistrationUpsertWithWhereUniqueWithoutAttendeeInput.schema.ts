import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationWhereUniqueInputObjectSchema as RegistrationWhereUniqueInputObjectSchema } from './RegistrationWhereUniqueInput.schema';
import { RegistrationUpdateWithoutAttendeeInputObjectSchema as RegistrationUpdateWithoutAttendeeInputObjectSchema } from './RegistrationUpdateWithoutAttendeeInput.schema';
import { RegistrationUncheckedUpdateWithoutAttendeeInputObjectSchema as RegistrationUncheckedUpdateWithoutAttendeeInputObjectSchema } from './RegistrationUncheckedUpdateWithoutAttendeeInput.schema';
import { RegistrationCreateWithoutAttendeeInputObjectSchema as RegistrationCreateWithoutAttendeeInputObjectSchema } from './RegistrationCreateWithoutAttendeeInput.schema';
import { RegistrationUncheckedCreateWithoutAttendeeInputObjectSchema as RegistrationUncheckedCreateWithoutAttendeeInputObjectSchema } from './RegistrationUncheckedCreateWithoutAttendeeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistrationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RegistrationUpdateWithoutAttendeeInputObjectSchema), z.lazy(() => RegistrationUncheckedUpdateWithoutAttendeeInputObjectSchema)]),
  create: z.union([z.lazy(() => RegistrationCreateWithoutAttendeeInputObjectSchema), z.lazy(() => RegistrationUncheckedCreateWithoutAttendeeInputObjectSchema)])
}).strict();
export const RegistrationUpsertWithWhereUniqueWithoutAttendeeInputObjectSchema: z.ZodType<Prisma.RegistrationUpsertWithWhereUniqueWithoutAttendeeInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationUpsertWithWhereUniqueWithoutAttendeeInput>;
export const RegistrationUpsertWithWhereUniqueWithoutAttendeeInputObjectZodSchema = makeSchema();
