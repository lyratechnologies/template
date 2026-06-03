import * as z from 'zod';
export const WaitlistEntryFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  position: z.number().int(),
  promotedAt: z.date().optional(),
  cancelledAt: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  event: z.unknown(),
  eventId: z.string(),
  attendee: z.unknown(),
  attendeeId: z.string()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});