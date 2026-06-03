import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => UserWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserScalarRelationFilterObjectSchema: z.ZodType<Prisma.UserScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UserScalarRelationFilter>;
export const UserScalarRelationFilterObjectZodSchema = makeSchema();
