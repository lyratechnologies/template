import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const PostUncheckedCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.PostUncheckedCreateWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUncheckedCreateWithoutCreatedByInput>;
export const PostUncheckedCreateWithoutCreatedByInputObjectZodSchema = makeSchema();
