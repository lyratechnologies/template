import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutPostsNestedInputObjectSchema as UserUpdateOneRequiredWithoutPostsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPostsNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdBy: z.lazy(() => UserUpdateOneRequiredWithoutPostsNestedInputObjectSchema).optional()
}).strict();
export const PostUpdateInputObjectSchema: z.ZodType<Prisma.PostUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateInput>;
export const PostUpdateInputObjectZodSchema = makeSchema();
