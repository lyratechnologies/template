import * as z from 'zod';
export const EventCreateManyResultSchema = z.object({
  count: z.number()
});