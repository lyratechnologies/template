import { z } from "zod";

import { UserSchema } from "~/types/user";

/**
 * Domain type definition for Post entity
 * This serves as the single source of truth for Post types across the application
 *
 * Use cases:
 * 1. Type inference for TypeScript throughout the app
 * 2. Runtime validation for API inputs/outputs
 * 3. Form validation on the frontend
 * 4. Documentation of expected data structure
 *
 * Example usage:
 * - API validation: PostSchema.parse(requestBody)
 * - Type usage: function createPost(post: Post) { ... }
 * - Form validation: useForm<Post>({ resolver: zodResolver(PostSchema) })
 */
export const PostSchema = z.object({
  id: z.number(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

/**
 * Extended Post schema that includes user relation
 * Demonstrates how to compose schemas for complex types
 *
 * Use case: When fetching posts with their authors
 */
export const PostWithUserSchema = PostSchema.extend({
  createdBy: UserSchema,
});

export type Post = z.infer<typeof PostSchema>;
export type PostWithUser = z.infer<typeof PostWithUserSchema>;
