"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "~/server/auth";

export async function signInWithGoogle() {
  const response = await auth.api.signInSocial({
    body: {
      provider: "google",
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
