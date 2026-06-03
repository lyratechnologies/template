import * as z from 'zod';
export const UserUpsertResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  accounts: z.array(z.unknown()),
  sessions: z.array(z.unknown()),
  registrations: z.array(z.unknown()),
  waitlistEntries: z.array(z.unknown())
});