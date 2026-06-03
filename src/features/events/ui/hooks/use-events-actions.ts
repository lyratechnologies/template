import type { FormEvent } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { useTRPC } from "~/trpc/react";

export function useEventsActions({ isSignedIn }: { isSignedIn: boolean }) {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const eventsQuery = useQuery({
    ...trpc.events.list.queryOptions(),
    refetchInterval: isSignedIn ? 3000 : false,
  });
  const notificationsQuery = useQuery({
    ...trpc.notifications.list.queryOptions(),
    enabled: isSignedIn,
    refetchInterval: isSignedIn ? 3000 : false,
  });

  async function invalidateEventState() {
    await queryClient.invalidateQueries({
      queryKey: trpc.events.list.queryKey(),
    });
    await queryClient.invalidateQueries({
      queryKey: trpc.notifications.list.queryKey(),
    });
  }

  const createEventMutation = useMutation(
    trpc.events.create.mutationOptions({
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: trpc.events.list.queryKey(),
        });
        toast.success("Event published");
      },
      onError: () => {
        toast.error("Event could not be created");
      },
    })
  );
  const registerMutation = useMutation(
    trpc.events.registerForEvent.mutationOptions({
      onSuccess: async (result) => {
        await invalidateEventState();

        if (result.status === "registered") {
          toast.success("Registration confirmed");
          return;
        }

        if (result.status === "waitlisted") {
          toast.info(
            `Added to waitlist at position ${result.waitlistEntry.position}`
          );
          return;
        }

        toast.warning(
          result.reason === "already_registered"
            ? "You already have an active registration for this event"
            : "Registration is closed for this event"
        );
      },
      onError: () => {
        toast.error("Registration failed");
      },
    })
  );
  const cancelRegistrationMutation = useMutation(
    trpc.events.cancelRegistration.mutationOptions({
      onSuccess: async (result) => {
        await invalidateEventState();

        if (result.status === "cancelled") {
          toast.success("Registration cancelled");
          return;
        }

        toast.warning("You do not have an active registration for this event");
      },
      onError: () => {
        toast.error("Registration could not be cancelled");
      },
    })
  );
  const leaveWaitlistMutation = useMutation(
    trpc.events.leaveWaitlist.mutationOptions({
      onSuccess: async (result) => {
        await invalidateEventState();

        if (result.status === "left_waitlist") {
          toast.success("Left waitlist");
          return;
        }

        toast.warning("You are not on the waitlist for this event");
      },
      onError: () => {
        toast.error("Could not leave waitlist");
      },
    })
  );

  function createEvent(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const title = getFormString(form, "title");
    const description = getFormString(form, "description");
    const startsAtValue = getFormString(form, "startsAt");
    const capacity = Number(getFormString(form, "capacity"));
    const startsAt = new Date(startsAtValue);
    const registrationOpensAt = new Date();

    if (
      !title ||
      !description ||
      Number.isNaN(startsAt.getTime()) ||
      capacity < 1
    ) {
      toast.warning("Enter a title, description, start time, and capacity");
      return;
    }

    createEventMutation.mutate(
      {
        title,
        description,
        startsAt,
        capacity,
        registrationOpensAt,
        registrationClosesAt: startsAt,
      },
      {
        onSuccess: () => {
          formElement.reset();
        },
      }
    );
  }

  return {
    events: eventsQuery.data ?? [],
    notifications: notificationsQuery.data ?? [],
    isCreateEventPending: createEventMutation.isPending,
    isEventActionPending:
      registerMutation.isPending ||
      cancelRegistrationMutation.isPending ||
      leaveWaitlistMutation.isPending,
    isEventsError: eventsQuery.isError,
    isEventsLoading: eventsQuery.isLoading,
    cancelRegistration: (eventId: string) => {
      cancelRegistrationMutation.mutate({ eventId });
    },
    createEvent,
    leaveWaitlist: (eventId: string) => {
      leaveWaitlistMutation.mutate({ eventId });
    },
    registerForEvent: (eventId: string) => {
      registerMutation.mutate({ eventId });
    },
  };
}

function getFormString(form: FormData, key: string) {
  const value = form.get(key);
  return typeof value === "string" ? value : "";
}
