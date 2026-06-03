"use client";

import type { UseMutationOptions } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

interface UseMutationWithToastOptions<TData, TError, TVariables> extends Omit<
  UseMutationOptions<TData, TError, TVariables>,
  "onSuccess" | "onError"
> {
  onSuccess?: (data: TData, variables: TVariables) => void;
  onError?: (error: TError, variables: TVariables) => void;
  successMessage?: string | ((data: TData, variables: TVariables) => string);
  errorMessage?: string | ((error: TError, variables: TVariables) => string);
}

export function useMutationWithToast<TData, TError, TVariables>(
  options: UseMutationWithToastOptions<TData, TError, TVariables>
) {
  const {
    onSuccess,
    onError,
    successMessage = "Operation completed successfully",
    errorMessage = "Something went wrong",
    ...mutationOptions
  } = options;

  return useMutation({
    ...mutationOptions,
    onSuccess: (data, variables, _context) => {
      // Show success toast
      const message =
        typeof successMessage === "function"
          ? successMessage(data, variables)
          : successMessage;
      toast.success(message);

      // Call the original success callback
      onSuccess?.(data, variables);
    },
    onError: (error, variables, _context) => {
      // Show error toast
      const message =
        typeof errorMessage === "function"
          ? errorMessage(error, variables)
          : errorMessage;
      toast.error(message);

      // Call the original error callback
      onError?.(error, variables);
    },
  });
}
