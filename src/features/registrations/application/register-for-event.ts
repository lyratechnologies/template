import { z } from "zod";

import { EventSchema, isRegistrationOpen, type Event } from "../../events";
import {
  RegistrationSummarySchema,
  WaitlistEntrySummarySchema,
} from "../domain/registration";

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
  }),
  z.object({
    status: z.literal("waitlisted"),
    waitlistEntry: WaitlistEntrySummarySchema,
  }),
  z.object({
    status: z.literal("rejected"),
    reason: RegisterForEventRejectionReasonSchema,
  }),
]);

export type RegisterForEventOutput = z.infer<
  typeof RegisterForEventOutputSchema
>;

export type RegisterForEventPorts = {
  findEventById: (eventId: string) => Promise<Event | null>;
  findActiveRegistration: (input: {
    attendeeId: string;
    eventId: string;
  }) => Promise<z.infer<typeof RegistrationSummarySchema> | null>;
  countConfirmedRegistrations: (eventId: string) => Promise<number>;
  createConfirmedRegistration: (input: {
    attendeeId: string;
    eventId: string;
  }) => Promise<z.infer<typeof RegistrationSummarySchema>>;
  createWaitlistEntry: (input: {
    attendeeId: string;
    eventId: string;
  }) => Promise<z.infer<typeof WaitlistEntrySummarySchema>>;
};

export async function registerForEvent(
  rawInput: RegisterForEventInput,
  ports: RegisterForEventPorts,
): Promise<RegisterForEventOutput> {
  const input = RegisterForEventInputSchema.parse(rawInput);
  const event = EventSchema.nullable().parse(
    await ports.findEventById(input.eventId),
  );

  if (event === null) {
    throw new Error("Event not found");
  }

  if (!isRegistrationOpen(event.registrationWindow, input.requestedAt)) {
    return {
      status: "rejected",
      reason: "registration_closed",
    };
  }

  const activeRegistration = await ports.findActiveRegistration({
    attendeeId: input.attendeeId,
    eventId: input.eventId,
  });

  if (activeRegistration !== null) {
    return {
      status: "rejected",
      reason: "already_registered",
    };
  }

  const confirmedRegistrationCount =
    await ports.countConfirmedRegistrations(input.eventId);

  if (confirmedRegistrationCount >= event.capacity) {
    return RegisterForEventOutputSchema.parse({
      status: "waitlisted",
      waitlistEntry: await ports.createWaitlistEntry({
        attendeeId: input.attendeeId,
        eventId: input.eventId,
      }),
    });
  }

  return RegisterForEventOutputSchema.parse({
    status: "registered",
    registration: await ports.createConfirmedRegistration({
      attendeeId: input.attendeeId,
      eventId: input.eventId,
    }),
  });
}
