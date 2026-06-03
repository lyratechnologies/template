import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationScalarWhereInputObjectSchema as RegistrationScalarWhereInputObjectSchema } from './RegistrationScalarWhereInput.schema';
import { RegistrationUpdateManyMutationInputObjectSchema as RegistrationUpdateManyMutationInputObjectSchema } from './RegistrationUpdateManyMutationInput.schema';
import { RegistrationUncheckedUpdateManyWithoutEventInputObjectSchema as RegistrationUncheckedUpdateManyWithoutEventInputObjectSchema } from './RegistrationUncheckedUpdateManyWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistrationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RegistrationUpdateManyMutationInputObjectSchema), z.lazy(() => RegistrationUncheckedUpdateManyWithoutEventInputObjectSchema)])
}).strict();
export const RegistrationUpdateManyWithWhereWithoutEventInputObjectSchema: z.ZodType<Prisma.RegistrationUpdateManyWithWhereWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationUpdateManyWithWhereWithoutEventInput>;
export const RegistrationUpdateManyWithWhereWithoutEventInputObjectZodSchema = makeSchema();
