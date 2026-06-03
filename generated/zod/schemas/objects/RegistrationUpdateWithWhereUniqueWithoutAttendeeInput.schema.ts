import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationWhereUniqueInputObjectSchema as RegistrationWhereUniqueInputObjectSchema } from './RegistrationWhereUniqueInput.schema';
import { RegistrationUpdateWithoutAttendeeInputObjectSchema as RegistrationUpdateWithoutAttendeeInputObjectSchema } from './RegistrationUpdateWithoutAttendeeInput.schema';
import { RegistrationUncheckedUpdateWithoutAttendeeInputObjectSchema as RegistrationUncheckedUpdateWithoutAttendeeInputObjectSchema } from './RegistrationUncheckedUpdateWithoutAttendeeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistrationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RegistrationUpdateWithoutAttendeeInputObjectSchema), z.lazy(() => RegistrationUncheckedUpdateWithoutAttendeeInputObjectSchema)])
}).strict();
export const RegistrationUpdateWithWhereUniqueWithoutAttendeeInputObjectSchema: z.ZodType<Prisma.RegistrationUpdateWithWhereUniqueWithoutAttendeeInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationUpdateWithWhereUniqueWithoutAttendeeInput>;
export const RegistrationUpdateWithWhereUniqueWithoutAttendeeInputObjectZodSchema = makeSchema();
