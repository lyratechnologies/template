import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const RegistrationWhereUniqueInputObjectSchema: z.ZodType<Prisma.RegistrationWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationWhereUniqueInput>;
export const RegistrationWhereUniqueInputObjectZodSchema = makeSchema();
