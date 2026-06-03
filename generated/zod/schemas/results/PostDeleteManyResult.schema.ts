import * as z from 'zod';
export const PostDeleteManyResultSchema = z.object({
  count: z.number()
});