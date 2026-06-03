import { describe, expect, it } from "vitest";

import { cancelRegistration } from "../cancel-registration";

describe("cancelRegistration", () => {
  it('returns "cancelled" when the attendee has an active registration', async () => {
    const result = await cancelRegistration(
      {
        attendeeId: "attendee_1",
        eventId: "event_1",
        requestedAt: new Date("2026-06-03T10:00:00.000Z"),
      },
      {
        registrations: {
          findActiveRegistration: async () => ({
            id: "registration_1",
            attendeeId: "attendee_1",
            eventId: "event_1",
            status: "confirmed",
          }),
          cancelRegistration: async (input) => ({
            id: input.registrationId,
            attendeeId: "attendee_1",
            eventId: "event_1",
            status: "cancelled",
          }),
          promoteNextWaitlistEntry: async () => null,
        },
      }
    );

    expect(result).toEqual({
      status: "cancelled",
      registration: {
        id: "registration_1",
        attendeeId: "attendee_1",
        eventId: "event_1",
        status: "cancelled",
      },
      events: [
        {
          type: "RegistrationCancelled",
          registrationId: "registration_1",
          attendeeId: "attendee_1",
          eventId: "event_1",
        },
      ],
    });
  });

  it("promotes the next waitlist entry when cancellation frees capacity", async () => {
    const result = await cancelRegistration(
      {
        attendeeId: "attendee_1",
        eventId: "event_1",
        requestedAt: new Date("2026-06-03T10:00:00.000Z"),
      },
      {
        registrations: {
          findActiveRegistration: async () => ({
            id: "registration_1",
            attendeeId: "attendee_1",
            eventId: "event_1",
            status: "confirmed",
          }),
          cancelRegistration: async (input) => ({
            id: input.registrationId,
            attendeeId: "attendee_1",
            eventId: "event_1",
            status: "cancelled",
          }),
          promoteNextWaitlistEntry: async (input) => ({
            registration: {
              id: "registration_2",
              attendeeId: "attendee_2",
              eventId: input.eventId,
              status: "confirmed",
            },
            waitlistEntry: {
              id: "waitlist_1",
              attendeeId: "attendee_2",
              eventId: input.eventId,
              position: 1,
            },
          }),
        },
      }
    );

    expect(result.events).toEqual([
      {
        type: "RegistrationCancelled",
        registrationId: "registration_1",
        attendeeId: "attendee_1",
        eventId: "event_1",
      },
      {
        type: "WaitlistPromoted",
        registrationId: "registration_2",
        waitlistEntryId: "waitlist_1",
        attendeeId: "attendee_2",
        eventId: "event_1",
      },
    ]);
  });

  it('returns "rejected" when the attendee has no active registration', async () => {
    const result = await cancelRegistration(
      {
        attendeeId: "attendee_1",
        eventId: "event_1",
        requestedAt: new Date("2026-06-03T10:00:00.000Z"),
      },
      {
        registrations: {
          findActiveRegistration: async () => null,
          cancelRegistration: async () => {
            throw new Error("should not cancel a missing registration");
          },
          promoteNextWaitlistEntry: async () => {
            throw new Error("should not promote after rejected cancellation");
          },
        },
      }
    );

    expect(result).toEqual({
      status: "rejected",
      reason: "not_registered",
      events: [],
    });
  });
});
