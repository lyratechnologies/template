import * as z from 'zod';
export const EventDeleteManyResultSchema = z.object({
  count: z.number()
});