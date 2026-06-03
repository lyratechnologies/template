import * as z from 'zod';
// prettier-ignore
export const PostModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    createdBy: z.unknown(),
    createdById: z.string()
}).strict();

export type PostPureType = z.infer<typeof PostModelSchema>;
