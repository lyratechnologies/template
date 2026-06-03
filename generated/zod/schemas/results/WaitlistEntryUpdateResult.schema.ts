import * as z from 'zod';
export const WaitlistEntryUpdateResultSchema = z.nullable(z.object({
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
}));