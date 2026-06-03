import * as z from 'zod';
export const WaitlistEntryAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    position: z.number(),
    promotedAt: z.number(),
    cancelledAt: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    event: z.number(),
    eventId: z.number(),
    attendee: z.number(),
    attendeeId: z.number()
  }).optional(),
  _sum: z.object({
    position: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    position: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    position: z.number().int().nullable(),
    promotedAt: z.date().nullable(),
    cancelledAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    eventId: z.string().nullable(),
    attendeeId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    position: z.number().int().nullable(),
    promotedAt: z.date().nullable(),
    cancelledAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    eventId: z.string().nullable(),
    attendeeId: z.string().nullable()
  }).nullable().optional()});