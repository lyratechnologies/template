import * as z from 'zod';
// prettier-ignore
export const VerificationResultSchema = z.object({
    id: z.string(),
    identifier: z.string(),
    value: z.string(),
    expiresAt: z.date(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type VerificationResultType = z.infer<typeof VerificationResultSchema>;
