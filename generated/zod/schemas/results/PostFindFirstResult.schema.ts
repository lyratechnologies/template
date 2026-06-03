import * as z from 'zod';
export const PostFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  createdBy: z.unknown(),
  createdById: z.string()
}));