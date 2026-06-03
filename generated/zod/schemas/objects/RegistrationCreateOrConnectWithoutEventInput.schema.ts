import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationWhereUniqueInputObjectSchema as RegistrationWhereUniqueInputObjectSchema } from './RegistrationWhereUniqueInput.schema';
import { RegistrationCreateWithoutEventInputObjectSchema as RegistrationCreateWithoutEventInputObjectSchema } from './RegistrationCreateWithoutEventInput.schema';
import { RegistrationUncheckedCreateWithoutEventInputObjectSchema as RegistrationUncheckedCreateWithoutEventInputObjectSchema } from './RegistrationUncheckedCreateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistrationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RegistrationCreateWithoutEventInputObjectSchema), z.lazy(() => RegistrationUncheckedCreateWithoutEventInputObjectSchema)])
}).strict();
export const RegistrationCreateOrConnectWithoutEventInputObjectSchema: z.ZodType<Prisma.RegistrationCreateOrConnectWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationCreateOrConnectWithoutEventInput>;
export const RegistrationCreateOrConnectWithoutEventInputObjectZodSchema = makeSchema();
