import type { RegistrationRepository } from "../repositories/registration-repository";
import { z } from "zod";

import { EventRegistrationEventSchema } from "../domain/event";
import { RegistrationSummarySchema } from "../domain/registration";

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

export type CancelRegistrationRepositories = {
  registrations: Pick<
    RegistrationRepository,
    "findActiveRegistration" | "cancelRegistration" | "promoteNextWaitlistEntry"
  >;
};

export async function cancelRegistration(
  rawInput: CancelRegistrationInput,
  repositories: CancelRegistrationRepositories
): Promise<CancelRegistrationOutput> {
  const input = CancelRegistrationInputSchema.parse(rawInput);
  const activeRegistration =
    await repositories.registrations.findActiveRegistration({
      attendeeId: input.attendeeId,
      eventId: input.eventId,
    });

  if (activeRegistration === null) {
    return {
      status: "rejected",
      reason: "not_registered",
      events: [],
    };
  }

  const registration = await repositories.registrations.cancelRegistration({
    registrationId: activeRegistration.id,
    cancelledAt: input.requestedAt,
  });
  const promotedWaitlistEntry =
    await repositories.registrations.promoteNextWaitlistEntry({
      eventId: input.eventId,
      promotedAt: input.requestedAt,
    });

  return CancelRegistrationOutputSchema.parse({
    status: "cancelled",
    registration,
    events: [
      {
        type: "RegistrationCancelled",
        registrationId: registration.id,
        attendeeId: registration.attendeeId,
        eventId: registration.eventId,
      },
      ...(promotedWaitlistEntry
        ? [
            {
              type: "WaitlistPromoted",
              registrationId: promotedWaitlistEntry.registration.id,
              waitlistEntryId: promotedWaitlistEntry.waitlistEntry.id,
              attendeeId: promotedWaitlistEntry.registration.attendeeId,
              eventId: promotedWaitlistEntry.registration.eventId,
            },
          ]
        : []),
    ],
  });
}
