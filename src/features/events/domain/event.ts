import { z } from "zod";

export const RegistrationWindowSchema = z.object({
  opensAt: z.date(),
  closesAt: z.date(),
});

export type RegistrationWindow = z.infer<typeof RegistrationWindowSchema>;

export const EventSchema = z.object({
  id: z.string().min(1),
  capacity: z.number().int().positive(),
  registrationWindow: RegistrationWindowSchema,
});

export type Event = z.infer<typeof EventSchema>;

export const EventSummarySchema = EventSchema.extend({
  title: z.string().min(1),
  description: z.string(),
  startsAt: z.date(),
  confirmedRegistrationCount: z.number().int().nonnegative(),
  waitlistEntryCount: z.number().int().nonnegative(),
});

export type EventSummary = z.infer<typeof EventSummarySchema>;

export const EventRegistrationSnapshotSchema = EventSchema.extend({
  confirmedRegistrationCount: z.number().int().nonnegative(),
});

export type EventRegistrationSnapshot = z.infer<
  typeof EventRegistrationSnapshotSchema
>;

export const EventRegistrationEventSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("RegistrationConfirmed"),
    registrationId: z.string().min(1),
    attendeeId: z.string().min(1),
    eventId: z.string().min(1),
  }),
  z.object({
    type: z.literal("WaitlistJoined"),
    waitlistEntryId: z.string().min(1),
    attendeeId: z.string().min(1),
    eventId: z.string().min(1),
  }),
]);

export type EventRegistrationEvent = z.infer<
  typeof EventRegistrationEventSchema
>;

export function isRegistrationOpen(
  registrationWindow: RegistrationWindow,
  at: Date
) {
  return (
    registrationWindow.opensAt.getTime() <= at.getTime() &&
    at.getTime() <= registrationWindow.closesAt.getTime()
  );
}
