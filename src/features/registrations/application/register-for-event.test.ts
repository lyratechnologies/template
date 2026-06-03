import { describe, expect, it } from "vitest";

import { registerForEvent } from "./register-for-event";

describe("registerForEvent", () => {
  it('returns "registered" when the event is open, has capacity, and the attendee has no active registration', async () => {
    const now = new Date("2026-06-03T10:00:00.000Z");

    const result = await registerForEvent(
      {
        attendeeId: "attendee_1",
        eventId: "event_1",
        requestedAt: now,
      },
      {
        findEventById: async () => ({
          id: "event_1",
          capacity: 2,
          registrationWindow: {
            opensAt: new Date("2026-06-01T00:00:00.000Z"),
            closesAt: new Date("2026-06-10T00:00:00.000Z"),
          },
        }),
        findActiveRegistration: async () => null,
        countConfirmedRegistrations: async () => 1,
        createConfirmedRegistration: async () => ({
          id: "registration_1",
          attendeeId: "attendee_1",
          eventId: "event_1",
          status: "confirmed",
        }),
        createWaitlistEntry: async () => {
          throw new Error("should not waitlist when capacity is available");
        },
      },
    );

    expect(result).toEqual({
      status: "registered",
      registration: {
        id: "registration_1",
        attendeeId: "attendee_1",
        eventId: "event_1",
        status: "confirmed",
      },
    });
  });

  it('returns "rejected" when the registration window is closed', async () => {
    const result = await registerForEvent(
      {
        attendeeId: "attendee_1",
        eventId: "event_1",
        requestedAt: new Date("2026-06-11T00:00:00.000Z"),
      },
      {
        findEventById: async () => ({
          id: "event_1",
          capacity: 2,
          registrationWindow: {
            opensAt: new Date("2026-06-01T00:00:00.000Z"),
            closesAt: new Date("2026-06-10T00:00:00.000Z"),
          },
        }),
        findActiveRegistration: async () => {
          throw new Error("should not check registrations for a closed event");
        },
        countConfirmedRegistrations: async () => {
          throw new Error("should not count capacity for a closed event");
        },
        createConfirmedRegistration: async () => {
          throw new Error("should not create a registration for a closed event");
        },
        createWaitlistEntry: async () => {
          throw new Error("should not waitlist for a closed event");
        },
      },
    );

    expect(result).toEqual({
      status: "rejected",
      reason: "registration_closed",
    });
  });

  it('returns "rejected" when the attendee already has an active registration', async () => {
    const result = await registerForEvent(
      {
        attendeeId: "attendee_1",
        eventId: "event_1",
        requestedAt: new Date("2026-06-03T10:00:00.000Z"),
      },
      {
        findEventById: async () => ({
          id: "event_1",
          capacity: 2,
          registrationWindow: {
            opensAt: new Date("2026-06-01T00:00:00.000Z"),
            closesAt: new Date("2026-06-10T00:00:00.000Z"),
          },
        }),
        findActiveRegistration: async () => ({
          id: "registration_1",
          attendeeId: "attendee_1",
          eventId: "event_1",
          status: "confirmed",
        }),
        countConfirmedRegistrations: async () => {
          throw new Error("should not count capacity for a duplicate attendee");
        },
        createConfirmedRegistration: async () => {
          throw new Error("should not create a duplicate registration");
        },
        createWaitlistEntry: async () => {
          throw new Error("should not waitlist a duplicate attendee");
        },
      },
    );

    expect(result).toEqual({
      status: "rejected",
      reason: "already_registered",
    });
  });

  it('returns "waitlisted" when registration is open but the event is full', async () => {
    const result = await registerForEvent(
      {
        attendeeId: "attendee_2",
        eventId: "event_1",
        requestedAt: new Date("2026-06-03T10:00:00.000Z"),
      },
      {
        findEventById: async () => ({
          id: "event_1",
          capacity: 2,
          registrationWindow: {
            opensAt: new Date("2026-06-01T00:00:00.000Z"),
            closesAt: new Date("2026-06-10T00:00:00.000Z"),
          },
        }),
        findActiveRegistration: async () => null,
        countConfirmedRegistrations: async () => 2,
        createConfirmedRegistration: async () => {
          throw new Error("should not create a registration when full");
        },
        createWaitlistEntry: async () => ({
          id: "waitlist_1",
          attendeeId: "attendee_2",
          eventId: "event_1",
          position: 1,
        }),
      },
    );

    expect(result).toEqual({
      status: "waitlisted",
      waitlistEntry: {
        id: "waitlist_1",
        attendeeId: "attendee_2",
        eventId: "event_1",
        position: 1,
      },
    });
  });
});
