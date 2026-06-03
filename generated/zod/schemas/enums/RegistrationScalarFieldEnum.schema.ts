import * as z from 'zod';

export const RegistrationScalarFieldEnumSchema = z.enum(['id', 'status', 'registeredAt', 'cancelledAt', 'createdAt', 'updatedAt', 'eventId', 'attendeeId'])

export type RegistrationScalarFieldEnum = z.infer<typeof RegistrationScalarFieldEnumSchema>;