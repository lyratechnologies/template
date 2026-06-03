import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostCreateManyCreatedByInputObjectSchema as PostCreateManyCreatedByInputObjectSchema } from './PostCreateManyCreatedByInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PostCreateManyCreatedByInputObjectSchema), z.lazy(() => PostCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PostCreateManyCreatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.PostCreateManyCreatedByInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateManyCreatedByInputEnvelope>;
export const PostCreateManyCreatedByInputEnvelopeObjectZodSchema = makeSchema();
