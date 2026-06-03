import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationWhereInputObjectSchema as RegistrationWhereInputObjectSchema } from './RegistrationWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistrationWhereInputObjectSchema).optional()
}).strict();
export const EventCountOutputTypeCountRegistrationsArgsObjectSchema = makeSchema();
export const EventCountOutputTypeCountRegistrationsArgsObjectZodSchema = makeSchema();
