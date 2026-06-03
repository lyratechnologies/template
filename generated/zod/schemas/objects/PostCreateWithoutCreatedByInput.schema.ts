import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const PostCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.PostCreateWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateWithoutCreatedByInput>;
export const PostCreateWithoutCreatedByInputObjectZodSchema = makeSchema();
