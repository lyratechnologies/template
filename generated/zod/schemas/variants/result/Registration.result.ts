import * as z from 'zod';
import { RegistrationStatusSchema } from '../../enums/RegistrationStatus.schema';
// prettier-ignore
export const RegistrationResultSchema = z.object({
    id: z.string(),
    status: RegistrationStatusSchema,
    registeredAt: z.date(),
    cancelledAt: z.date().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    event: z.unknown(),
    eventId: z.string(),
    attendee: z.unknown(),
    attendeeId: z.string()
}).strict();

export type RegistrationResultType = z.infer<typeof RegistrationResultSchema>;
