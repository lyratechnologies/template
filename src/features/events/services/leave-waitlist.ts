import type { RegistrationRepository } from "../repositories/registration-repository";
import { z } from "zod";

import { EventRegistrationEventSchema } from "../domain/event";
import { WaitlistEntrySummarySchema } from "../domain/registration";

export const LeaveWaitlistInputSchema = z.object({
  attendeeId: z.string().min(1),
  eventId: z.string().min(1),
  requestedAt: z.date(),
});

export type LeaveWaitlistInput = z.infer<typeof LeaveWaitlistInputSchema>;

export const LeaveWaitlistRejectionReasonSchema = z.literal("not_waitlisted");

export type LeaveWaitlistRejectionReason = z.infer<
  typeof LeaveWaitlistRejectionReasonSchema
>;

export const LeaveWaitlistOutputSchema = z.discriminatedUnion("status", [
  z.object({
    status: z.literal("left_waitlist"),
    waitlistEntry: WaitlistEntrySummarySchema,
    events: z.array(EventRegistrationEventSchema),
  }),
  z.object({
    status: z.literal("rejected"),
    reason: LeaveWaitlistRejectionReasonSchema,
    events: z.array(EventRegistrationEventSchema),
  }),
]);

export type LeaveWaitlistOutput = z.infer<typeof LeaveWaitlistOutputSchema>;

export type LeaveWaitlistRepositories = {
  registrations: Pick<
    RegistrationRepository,
    "findActiveWaitlistEntry" | "cancelWaitlistEntry"
  >;
};

export async function leaveWaitlist(
  rawInput: LeaveWaitlistInput,
  repositories: LeaveWaitlistRepositories
): Promise<LeaveWaitlistOutput> {
  const input = LeaveWaitlistInputSchema.parse(rawInput);
  const activeWaitlistEntry =
    await repositories.registrations.findActiveWaitlistEntry({
      attendeeId: input.attendeeId,
      eventId: input.eventId,
    });

  if (activeWaitlistEntry === null) {
    return {
      status: "rejected",
      reason: "not_waitlisted",
      events: [],
    };
  }

  const waitlistEntry = await repositories.registrations.cancelWaitlistEntry({
    waitlistEntryId: activeWaitlistEntry.id,
    cancelledAt: input.requestedAt,
  });

  return LeaveWaitlistOutputSchema.parse({
    status: "left_waitlist",
    waitlistEntry,
    events: [
      {
        type: "WaitlistLeft",
        waitlistEntryId: waitlistEntry.id,
        attendeeId: waitlistEntry.attendeeId,
        eventId: waitlistEntry.eventId,
      },
    ],
  });
}
