import type { Post, PostWithUser } from "~/types/post";
import type { Prisma } from "generated/prisma/client";

import { PrismaUserToUser, UserQuery } from "./user";

/**
 * Prisma query configuration for basic Post fetching
 * Defines what fields to select/include when querying posts
 *
 * Use case: Ensures consistent field selection across all post queries
 */
export const PostQuery = {} satisfies Prisma.PostDefaultArgs;

/**
 * Prisma query configuration for Post with User relation
 * Automatically includes the related user data
 *
 * Use case: When you need post data along with author information
 * Example: db.post.findMany(PostWithUserQuery)
 */
export const PostWithUserQuery = {
  include: {
    createdBy: UserQuery,
  },
} satisfies Prisma.PostDefaultArgs;

/**
 * Maps Prisma Post type to domain Post type
 * This creates a boundary between database schema and business logic
 *
 * Benefits:
 * - Database schema can change without affecting domain types
 * - Explicit field mapping prevents accidental data exposure
 * - Easy to add computed fields or transformations
 *
 * Use case: Convert database query results to domain types
 * Example: const domainPost = PrismaPostToPost(prismaPost)
 */
export const PrismaPostToPost = (
  post: Prisma.PostGetPayload<typeof PostQuery>
): Post => {
  return {
    id: post.id,
    name: post.name,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
  };
};

/**
 * Maps Prisma Post with relations to domain PostWithUser type
 * Demonstrates how to handle nested relations in mappings
 *
 * Use case: Convert complex query results with relations
 * Example: posts.map(PrismaPostWithUserToPostWithUser)
 */
export const PrismaPostWithUserToPostWithUser = (
  post: Prisma.PostGetPayload<typeof PostWithUserQuery>
): PostWithUser => {
  return {
    ...PrismaPostToPost(post),
    createdBy: PrismaUserToUser(post.createdBy),
  };
};
