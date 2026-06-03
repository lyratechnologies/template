import * as z from 'zod';

export const PostScalarFieldEnumSchema = z.enum(['id', 'name', 'createdAt', 'updatedAt', 'createdById'])

export type PostScalarFieldEnum = z.infer<typeof PostScalarFieldEnumSchema>;