import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { CreatePostInputSchema } from "~/services/post/service";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(CreatePostInputSchema.pick({ name: true }))
    .mutation(async ({ ctx, input }) => {
      return ctx.postService.createPost({
        name: input.name,
        createdBy: {
          id: ctx.session.user.id,
          name: ctx.session.user.name ?? "",
          email: ctx.session.user.email ?? "",
          image: ctx.session.user.image ?? "",
          emailVerified: ctx.session.user.emailVerified,
        },
      });
    }),

  latest: protectedProcedure.query(async ({ ctx }) => {
    const post = await ctx.postService.getLatestPost();

    return post;
  }),

  all: protectedProcedure.query(async ({ ctx }) => {
    return ctx.postService.getAllPosts();
  }),

  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.postService.getPost(input.id);
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
