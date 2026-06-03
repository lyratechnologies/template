import * as z from 'zod';
import { RegistrationStatusSchema } from '../../enums/RegistrationStatus.schema';
// prettier-ignore
export const RegistrationModelSchema = z.object({
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

export type RegistrationPureType = z.infer<typeof RegistrationModelSchema>;
