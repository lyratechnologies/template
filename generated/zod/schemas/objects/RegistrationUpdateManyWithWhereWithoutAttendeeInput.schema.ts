import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationScalarWhereInputObjectSchema as RegistrationScalarWhereInputObjectSchema } from './RegistrationScalarWhereInput.schema';
import { RegistrationUpdateManyMutationInputObjectSchema as RegistrationUpdateManyMutationInputObjectSchema } from './RegistrationUpdateManyMutationInput.schema';
import { RegistrationUncheckedUpdateManyWithoutAttendeeInputObjectSchema as RegistrationUncheckedUpdateManyWithoutAttendeeInputObjectSchema } from './RegistrationUncheckedUpdateManyWithoutAttendeeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistrationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RegistrationUpdateManyMutationInputObjectSchema), z.lazy(() => RegistrationUncheckedUpdateManyWithoutAttendeeInputObjectSchema)])
}).strict();
export const RegistrationUpdateManyWithWhereWithoutAttendeeInputObjectSchema: z.ZodType<Prisma.RegistrationUpdateManyWithWhereWithoutAttendeeInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationUpdateManyWithWhereWithoutAttendeeInput>;
export const RegistrationUpdateManyWithWhereWithoutAttendeeInputObjectZodSchema = makeSchema();
