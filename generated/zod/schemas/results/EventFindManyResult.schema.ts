import * as z from 'zod';
export const EventFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});