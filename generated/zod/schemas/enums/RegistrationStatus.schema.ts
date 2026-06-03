import * as z from 'zod';

export const RegistrationStatusSchema = z.enum(['CONFIRMED', 'CANCELLED'])

export type RegistrationStatus = z.infer<typeof RegistrationStatusSchema>;