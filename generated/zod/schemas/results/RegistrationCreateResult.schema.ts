import * as z from 'zod';
export const RegistrationCreateResultSchema = z.object({
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
});