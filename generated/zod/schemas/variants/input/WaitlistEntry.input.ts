import * as z from 'zod';
// prettier-ignore
export const WaitlistEntryInputSchema = z.object({
    id: z.string(),
    position: z.number().int(),
    promotedAt: z.date().optional().nullable(),
    cancelledAt: z.date().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    event: z.unknown(),
    eventId: z.string(),
    attendee: z.unknown(),
    attendeeId: z.string()
}).strict();

export type WaitlistEntryInputType = z.infer<typeof WaitlistEntryInputSchema>;
