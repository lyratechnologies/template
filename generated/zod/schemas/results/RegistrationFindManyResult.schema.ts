import * as z from 'zod';
export const RegistrationFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  status: z.unknown(),
  registeredAt: z.date(),
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