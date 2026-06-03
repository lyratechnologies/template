import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationWhereUniqueInputObjectSchema as RegistrationWhereUniqueInputObjectSchema } from './RegistrationWhereUniqueInput.schema';
import { RegistrationUpdateWithoutEventInputObjectSchema as RegistrationUpdateWithoutEventInputObjectSchema } from './RegistrationUpdateWithoutEventInput.schema';
import { RegistrationUncheckedUpdateWithoutEventInputObjectSchema as RegistrationUncheckedUpdateWithoutEventInputObjectSchema } from './RegistrationUncheckedUpdateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistrationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RegistrationUpdateWithoutEventInputObjectSchema), z.lazy(() => RegistrationUncheckedUpdateWithoutEventInputObjectSchema)])
}).strict();
export const RegistrationUpdateWithWhereUniqueWithoutEventInputObjectSchema: z.ZodType<Prisma.RegistrationUpdateWithWhereUniqueWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationUpdateWithWhereUniqueWithoutEventInput>;
export const RegistrationUpdateWithWhereUniqueWithoutEventInputObjectZodSchema = makeSchema();
