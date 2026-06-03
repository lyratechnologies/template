import { z } from "zod";

export const NotificationOutcomeSchema = z.enum([
  "RegistrationConfirmed",
  "WaitlistJoined",
]);

export type NotificationOutcome = z.infer<typeof NotificationOutcomeSchema>;

export const NotificationSchema = z.object({
  attendeeId: z.string().min(1),
  eventId: z.string().min(1),
  outcome: NotificationOutcomeSchema,
});

export type Notification = z.infer<typeof NotificationSchema>;
