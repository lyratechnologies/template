import * as z from 'zod';

export const WaitlistEntryScalarFieldEnumSchema = z.enum(['id', 'position', 'promotedAt', 'cancelledAt', 'createdAt', 'updatedAt', 'eventId', 'attendeeId'])

export type WaitlistEntryScalarFieldEnum = z.infer<typeof WaitlistEntryScalarFieldEnumSchema>;