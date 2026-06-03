import * as z from 'zod';
// prettier-ignore
export const EventInputSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    startsAt: z.date(),
    capacity: z.number().int(),
    registrationOpensAt: z.date(),
    registrationClosesAt: z.date(),
    createdAt: z.date(),
    updatedAt: z.date(),
    registrations: z.array(z.unknown()),
    waitlistEntries: z.array(z.unknown())
}).strict();

export type EventInputType = z.infer<typeof EventInputSchema>;
