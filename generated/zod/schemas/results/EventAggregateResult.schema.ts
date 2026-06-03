import * as z from 'zod';
export const EventAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    title: z.number(),
    description: z.number(),
    startsAt: z.number(),
    capacity: z.number(),
    registrationOpensAt: z.number(),
    registrationClosesAt: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    registrations: z.number(),
    waitlistEntries: z.number()
  }).optional(),
  _sum: z.object({
    capacity: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    capacity: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    startsAt: z.date().nullable(),
    capacity: z.number().int().nullable(),
    registrationOpensAt: z.date().nullable(),
    registrationClosesAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    startsAt: z.date().nullable(),
    capacity: z.number().int().nullable(),
    registrationOpensAt: z.date().nullable(),
    registrationClosesAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});