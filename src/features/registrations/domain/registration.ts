import { z } from "zod";

export const RegistrationStatusSchema = z.literal("confirmed");

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
