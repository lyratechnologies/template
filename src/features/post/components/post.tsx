"use client";

import { useState } from "react";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

import { Input } from "~/features/shared/components/ui/input";
import { useTRPC } from "~/trpc/react";
import { type PostWithUser } from "~/types/post";

import { usePostMutations } from "../hooks/usePostMutations";

export function HelloMessage() {
  const trpc = useTRPC();

  const { data: hello } = useSuspenseQuery(
    trpc.post.hello.queryOptions({ text: "from tRPC" })
  );

  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[hsl(280,100%,70%)] to-[hsl(240,100%,70%)] px-4 py-2">
      <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
      <p className="text-lg font-medium text-white">
        {hello ? hello.greeting : "Loading tRPC query..."}
      </p>
    </div>
  );
}

export function LatestPost() {
  const trpc = useTRPC();

  const { data: latestPost } = useSuspenseQuery(
    trpc.post.latest.queryOptions()
  );

  const [name, setName] = useState("");
  const { createMutation } = usePostMutations({
    create: {
      onSuccess: () => {
        setName("");
      },
    },
  });

  return (
    <div className="w-full max-w-md space-y-4">
      <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
        {latestPost ? (
          <PostsWithUser post={latestPost} />
        ) : (
          <p className="text-gray-400">You have no posts yet.</p>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          createMutation.mutate({ name });
        }}
        className="space-y-3"
      >
        <div>
          <Input
            type="text"
            placeholder="What's on your mind?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 transition-all focus:border-[hsl(280,100%,70%)] focus:ring-2 focus:ring-[hsl(280,100%,70%)]/20 focus:outline-none"
            disabled={createMutation.isPending}
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-gradient-to-r from-[hsl(280,100%,70%)] to-[hsl(240,100%,70%)] px-6 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
          disabled={createMutation.isPending ?? !name.trim()}
        >
          {createMutation.isPending ? (
            <div className="flex items-center justify-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
              Posting...
            </div>
          ) : (
            "Create Post"
          )}
        </button>
      </form>
    </div>
  );
}

export function Posts() {
  const trpc = useTRPC();

  const { data: posts } = useSuspenseQuery(trpc.post.all.queryOptions());

  if (posts.length === 0) {
    return (
      <div className="py-8 text-center">
        <div className="mb-4 text-6xl">📝</div>
        <p className="mb-2 text-xl text-gray-400">No posts yet</p>
        <p className="text-gray-500">Be the first to create a post!</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <div
          key={post.id}
          className="group rounded-lg border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:scale-105 hover:border-[hsl(280,100%,70%)]/50"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[hsl(280,100%,70%)] to-[hsl(240,100%,70%)]">
              <span className="text-sm font-bold text-white">
                {post.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-white transition-colors group-hover:text-[hsl(280,100%,70%)]">
                {post.name}
              </p>
              <p className="mt-1 text-xs text-gray-400">
                {post.createdAt.toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Component that fetches and displays a single post by ID
 * Only queries when user submits an ID
 */
export function GetPost() {
  const trpc = useTRPC();
  const [id, setId] = useState("");

  const {
    data: post,
    isEnabled,
    isPending,
  } = useQuery(trpc.post.getById.queryOptions({ id }, { enabled: !!id }));

  return (
    <div className="w-full max-w-md space-y-4">
      {post && (
        <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
          <PostsWithUser post={post} showPostId />
        </div>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const idValue = formData.get("id");
          const id = typeof idValue === "string" ? idValue : "";
          setId(id);
        }}
        className="space-y-3"
      >
        <Input
          type="text"
          placeholder="Enter post ID"
          name="id"
          className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400"
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-gradient-to-r from-[hsl(280,100%,70%)] to-[hsl(240,100%,70%)] px-6 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
          disabled={isEnabled && isPending}
        >
          Get Post
        </button>
      </form>
    </div>
  );
}

function PostsWithUser({
  post,
  showPostId = false,
}: {
  post: PostWithUser;
  showPostId?: boolean;
}) {
  return (
    <div>
      <p className="mb-1 text-sm text-gray-400">
        {showPostId ? `Post ID: ${post.id}` : "Your most recent post:"}
      </p>
      <p className="truncate text-lg font-semibold text-white">{post.name}</p>
      <p className="text-gray-400">Created by: {post.createdBy.name}</p>
      <p className="text-gray-400">Email: {post.createdBy.email}</p>
      <p className="mt-2 text-sm text-gray-500">
        Created on: {new Date(post.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}
