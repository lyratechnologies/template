import { z } from "zod";

import { EventRegistrationEventSchema } from "../../domain/event";
import {
  RegistrationSummarySchema,
  WaitlistEntrySummarySchema,
} from "../../domain/registration";

export const RegisterForEventInputSchema = z.object({
  attendeeId: z.string().min(1),
  eventId: z.string().min(1),
  requestedAt: z.date(),
});

export type RegisterForEventInput = z.infer<typeof RegisterForEventInputSchema>;

export const RegisterForEventRejectionReasonSchema = z.enum([
  "registration_closed",
  "already_registered",
]);

export type RegisterForEventRejectionReason = z.infer<
  typeof RegisterForEventRejectionReasonSchema
>;

export const RegisterForEventOutputSchema = z.discriminatedUnion("status", [
  z.object({
    status: z.literal("registered"),
    registration: RegistrationSummarySchema,
    events: z.array(EventRegistrationEventSchema),
  }),
  z.object({
    status: z.literal("waitlisted"),
    waitlistEntry: WaitlistEntrySummarySchema,
    events: z.array(EventRegistrationEventSchema),
  }),
  z.object({
    status: z.literal("rejected"),
    reason: RegisterForEventRejectionReasonSchema,
    events: z.array(EventRegistrationEventSchema),
  }),
]);

export type RegisterForEventOutput = z.infer<
  typeof RegisterForEventOutputSchema
>;

export const CancelRegistrationInputSchema = z.object({
  attendeeId: z.string().min(1),
  eventId: z.string().min(1),
  requestedAt: z.date(),
});

export type CancelRegistrationInput = z.infer<
  typeof CancelRegistrationInputSchema
>;

export const CancelRegistrationRejectionReasonSchema =
  z.literal("not_registered");

export type CancelRegistrationRejectionReason = z.infer<
  typeof CancelRegistrationRejectionReasonSchema
>;

export const CancelRegistrationOutputSchema = z.discriminatedUnion("status", [
  z.object({
    status: z.literal("cancelled"),
    registration: RegistrationSummarySchema,
    events: z.array(EventRegistrationEventSchema),
  }),
  z.object({
    status: z.literal("rejected"),
    reason: CancelRegistrationRejectionReasonSchema,
    events: z.array(EventRegistrationEventSchema),
  }),
]);

export type CancelRegistrationOutput = z.infer<
  typeof CancelRegistrationOutputSchema
>;

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

export interface RegisterForEventUseCase {
  registerForEvent(
    rawInput: RegisterForEventInput
  ): Promise<RegisterForEventOutput>;
}

export interface CancelRegistrationUseCase {
  cancelRegistration(
    rawInput: CancelRegistrationInput
  ): Promise<CancelRegistrationOutput>;
}

export interface LeaveWaitlistUseCase {
  leaveWaitlist(rawInput: LeaveWaitlistInput): Promise<LeaveWaitlistOutput>;
}
