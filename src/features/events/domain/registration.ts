import { z } from "zod";

export const RegistrationStatusSchema = z.enum(["confirmed", "cancelled"]);

export type RegistrationStatus = z.infer<typeof RegistrationStatusSchema>;

export const RegistrationSummarySchema = z.object({
  id: z.string().min(1),
  attendeeId: z.string().min(1),
  eventId: z.string().min(1),
  status: RegistrationStatusSchema,
});

export type RegistrationSummary = z.infer<typeof RegistrationSummarySchema>;

export const WaitlistEntrySummarySchema = z.object({
  id: z.string().min(1),
  attendeeId: z.string().min(1),
  eventId: z.string().min(1),
  position: z.number().int().positive(),
});

export type WaitlistEntrySummary = z.infer<typeof WaitlistEntrySummarySchema>;

export function getNextWaitlistSequencePosition(
  existingWaitlistEntries: Array<Pick<WaitlistEntrySummary, "position">>
) {
  return (
    Math.max(
      0,
      ...existingWaitlistEntries.map((waitlistEntry) => waitlistEntry.position)
    ) + 1
  );
}

export function getActiveWaitlistRank(
  waitlistEntry: Pick<WaitlistEntrySummary, "id">,
  activeWaitlistEntries: Array<Pick<WaitlistEntrySummary, "id" | "position">>
) {
  const activeRank = [...activeWaitlistEntries]
    .sort((left, right) => left.position - right.position)
    .findIndex(
      (activeWaitlistEntry) => activeWaitlistEntry.id === waitlistEntry.id
    );

  return activeRank === -1 ? null : activeRank + 1;
}

export const AttendeeEventParticipationSchema = z.discriminatedUnion("status", [
  z.object({
    status: z.literal("registered"),
    registration: RegistrationSummarySchema,
  }),
  z.object({
    status: z.literal("waitlisted"),
    waitlistEntry: WaitlistEntrySummarySchema,
  }),
]);

export type AttendeeEventParticipation = z.infer<
  typeof AttendeeEventParticipationSchema
>;
