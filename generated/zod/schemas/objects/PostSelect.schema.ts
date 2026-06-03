import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  createdById: z.boolean().optional()
}).strict();
export const PostSelectObjectSchema: z.ZodType<Prisma.PostSelect> = makeSchema() as unknown as z.ZodType<Prisma.PostSelect>;
export const PostSelectObjectZodSchema = makeSchema();
