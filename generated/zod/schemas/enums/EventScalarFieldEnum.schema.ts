import * as z from 'zod';

export const EventScalarFieldEnumSchema = z.enum(['id', 'title', 'description', 'startsAt', 'capacity', 'registrationOpensAt', 'registrationClosesAt', 'createdAt', 'updatedAt'])

export type EventScalarFieldEnum = z.infer<typeof EventScalarFieldEnumSchema>;