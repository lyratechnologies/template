"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "~/server/auth";

export async function signInWithDiscord() {
  const response = await auth.api.signInSocial({
    body: {
      provider: "discord",
      callbackURL: "/",
    },
  });

  if (response.url) {
    redirect(response.url);
  }
}

export async function signOut() {
  await auth.api.signOut({
    headers: await headers(),
  });

  redirect("/");
}
