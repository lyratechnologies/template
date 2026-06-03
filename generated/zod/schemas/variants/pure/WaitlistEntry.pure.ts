import * as z from 'zod';
// prettier-ignore
export const WaitlistEntryModelSchema = z.object({
    id: z.string(),
    position: z.number().int(),
    promotedAt: z.date().nullable(),
    cancelledAt: z.date().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    event: z.unknown(),
    eventId: z.string(),
    attendee: z.unknown(),
    attendeeId: z.string()
}).strict();

export type WaitlistEntryPureType = z.infer<typeof WaitlistEntryModelSchema>;
