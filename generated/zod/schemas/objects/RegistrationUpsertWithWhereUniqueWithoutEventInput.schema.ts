import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationWhereUniqueInputObjectSchema as RegistrationWhereUniqueInputObjectSchema } from './RegistrationWhereUniqueInput.schema';
import { RegistrationUpdateWithoutEventInputObjectSchema as RegistrationUpdateWithoutEventInputObjectSchema } from './RegistrationUpdateWithoutEventInput.schema';
import { RegistrationUncheckedUpdateWithoutEventInputObjectSchema as RegistrationUncheckedUpdateWithoutEventInputObjectSchema } from './RegistrationUncheckedUpdateWithoutEventInput.schema';
import { RegistrationCreateWithoutEventInputObjectSchema as RegistrationCreateWithoutEventInputObjectSchema } from './RegistrationCreateWithoutEventInput.schema';
import { RegistrationUncheckedCreateWithoutEventInputObjectSchema as RegistrationUncheckedCreateWithoutEventInputObjectSchema } from './RegistrationUncheckedCreateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistrationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RegistrationUpdateWithoutEventInputObjectSchema), z.lazy(() => RegistrationUncheckedUpdateWithoutEventInputObjectSchema)]),
  create: z.union([z.lazy(() => RegistrationCreateWithoutEventInputObjectSchema), z.lazy(() => RegistrationUncheckedCreateWithoutEventInputObjectSchema)])
}).strict();
export const RegistrationUpsertWithWhereUniqueWithoutEventInputObjectSchema: z.ZodType<Prisma.RegistrationUpsertWithWhereUniqueWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationUpsertWithWhereUniqueWithoutEventInput>;
export const RegistrationUpsertWithWhereUniqueWithoutEventInputObjectZodSchema = makeSchema();
