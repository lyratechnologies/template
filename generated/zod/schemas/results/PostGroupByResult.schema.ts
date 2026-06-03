import * as z from 'zod';
export const PostGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  createdById: z.string(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    createdBy: z.number(),
    createdById: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    createdById: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    createdById: z.string().nullable()
  }).nullable().optional()
}));