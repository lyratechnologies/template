import type { RegistrationServiceRepositories } from "./service";
import { describe, expect, it } from "vitest";

import { RegistrationService } from "./service";

function createRegistrationService(
  repositories: {
    events?: Partial<RegistrationServiceRepositories["events"]>;
    registrations?: Partial<RegistrationServiceRepositories["registrations"]>;
  } = {}
) {
  return new RegistrationService({
    events: {
      findRegistrationSnapshot: async () => {
        throw new Error("findRegistrationSnapshot was not stubbed");
      },
      ...repositories.events,
    },
    registrations: {
      findActiveRegistration: async () => {
        throw new Error("findActiveRegistration was not stubbed");
      },
      findActiveWaitlistEntry: async () => {
        throw new Error("findActiveWaitlistEntry was not stubbed");
      },
      createConfirmedRegistration: async () => {
        throw new Error("createConfirmedRegistration was not stubbed");
      },
      createWaitlistEntry: async () => {
        throw new Error("createWaitlistEntry was not stubbed");
      },
      cancelRegistration: async () => {
        throw new Error("cancelRegistration was not stubbed");
      },
      cancelWaitlistEntry: async () => {
        throw new Error("cancelWaitlistEntry was not stubbed");
      },
      promoteNextWaitlistEntry: async () => {
        throw new Error("promoteNextWaitlistEntry was not stubbed");
      },
      ...repositories.registrations,
    },
  });
}

describe("RegistrationService.registerForEvent", () => {
  it('returns "registered" when the event is open, has capacity, and the attendee has no active registration', async () => {
    const now = new Date("2026-06-03T10:00:00.000Z");
    const service = createRegistrationService({
      events: {
        findRegistrationSnapshot: async () => ({
          id: "event_1",
          capacity: 2,
          registrationWindow: {
            opensAt: new Date("2026-06-01T00:00:00.000Z"),
            closesAt: new Date("2026-06-10T00:00:00.000Z"),
          },
          confirmedRegistrationCount: 1,
        }),
      },
      registrations: {
        findActiveRegistration: async () => null,
        createConfirmedRegistration: async () => ({
          id: "registration_1",
          attendeeId: "attendee_1",
          eventId: "event_1",
          status: "confirmed",
        }),
      },
    });

    const result = await service.registerForEvent({
      attendeeId: "attendee_1",
      eventId: "event_1",
      requestedAt: now,
    });

    expect(result).toEqual({
      status: "registered",
      registration: {
        id: "registration_1",
        attendeeId: "attendee_1",
        eventId: "event_1",
        status: "confirmed",
      },
      events: [
        {
          type: "RegistrationConfirmed",
          registrationId: "registration_1",
          attendeeId: "attendee_1",
          eventId: "event_1",
        },
      ],
    });
  });

  it('returns "rejected" when the registration window is closed', async () => {
    const service = createRegistrationService({
      events: {
        findRegistrationSnapshot: async () => ({
          id: "event_1",
          capacity: 2,
          registrationWindow: {
            opensAt: new Date("2026-06-01T00:00:00.000Z"),
            closesAt: new Date("2026-06-10T00:00:00.000Z"),
          },
          confirmedRegistrationCount: 1,
        }),
      },
    });

    const result = await service.registerForEvent({
      attendeeId: "attendee_1",
      eventId: "event_1",
      requestedAt: new Date("2026-06-11T00:00:00.000Z"),
    });

    expect(result).toEqual({
      status: "rejected",
      reason: "registration_closed",
      events: [],
    });
  });

  it('returns "rejected" when the attendee already has an active registration', async () => {
    const service = createRegistrationService({
      events: {
        findRegistrationSnapshot: async () => ({
          id: "event_1",
          capacity: 2,
          registrationWindow: {
            opensAt: new Date("2026-06-01T00:00:00.000Z"),
            closesAt: new Date("2026-06-10T00:00:00.000Z"),
          },
          confirmedRegistrationCount: 1,
        }),
      },
      registrations: {
        findActiveRegistration: async () => ({
          id: "registration_1",
          attendeeId: "attendee_1",
          eventId: "event_1",
          status: "confirmed",
        }),
      },
    });

    const result = await service.registerForEvent({
      attendeeId: "attendee_1",
      eventId: "event_1",
      requestedAt: new Date("2026-06-03T10:00:00.000Z"),
    });

    expect(result).toEqual({
      status: "rejected",
      reason: "already_registered",
      events: [],
    });
  });

  it('returns "waitlisted" when registration is open but the event is full', async () => {
    const service = createRegistrationService({
      events: {
        findRegistrationSnapshot: async () => ({
          id: "event_1",
          capacity: 2,
          registrationWindow: {
            opensAt: new Date("2026-06-01T00:00:00.000Z"),
            closesAt: new Date("2026-06-10T00:00:00.000Z"),
          },
          confirmedRegistrationCount: 2,
        }),
      },
      registrations: {
        findActiveRegistration: async () => null,
        createWaitlistEntry: async () => ({
          id: "waitlist_1",
          attendeeId: "attendee_2",
          eventId: "event_1",
          position: 1,
        }),
      },
    });

    const result = await service.registerForEvent({
      attendeeId: "attendee_2",
      eventId: "event_1",
      requestedAt: new Date("2026-06-03T10:00:00.000Z"),
    });

    expect(result).toEqual({
      status: "waitlisted",
      waitlistEntry: {
        id: "waitlist_1",
        attendeeId: "attendee_2",
        eventId: "event_1",
        position: 1,
      },
      events: [
        {
          type: "WaitlistJoined",
          waitlistEntryId: "waitlist_1",
          attendeeId: "attendee_2",
          eventId: "event_1",
        },
      ],
    });
  });
});

describe("RegistrationService.cancelRegistration", () => {
  it('returns "cancelled" when the attendee has an active registration', async () => {
    const service = createRegistrationService({
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
    });

    const result = await service.cancelRegistration({
      attendeeId: "attendee_1",
      eventId: "event_1",
      requestedAt: new Date("2026-06-03T10:00:00.000Z"),
    });

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
    const service = createRegistrationService({
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
    });

    const result = await service.cancelRegistration({
      attendeeId: "attendee_1",
      eventId: "event_1",
      requestedAt: new Date("2026-06-03T10:00:00.000Z"),
    });

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
    const service = createRegistrationService({
      registrations: {
        findActiveRegistration: async () => null,
      },
    });

    const result = await service.cancelRegistration({
      attendeeId: "attendee_1",
      eventId: "event_1",
      requestedAt: new Date("2026-06-03T10:00:00.000Z"),
    });

    expect(result).toEqual({
      status: "rejected",
      reason: "not_registered",
      events: [],
    });
  });
});

describe("RegistrationService.leaveWaitlist", () => {
  it('returns "left_waitlist" when the attendee has an active waitlist entry', async () => {
    const service = createRegistrationService({
      registrations: {
        findActiveWaitlistEntry: async () => ({
          id: "waitlist_1",
          attendeeId: "attendee_1",
          eventId: "event_1",
          position: 2,
        }),
        cancelWaitlistEntry: async (input) => ({
          id: input.waitlistEntryId,
          attendeeId: "attendee_1",
          eventId: "event_1",
          position: 2,
        }),
      },
    });

    const result = await service.leaveWaitlist({
      attendeeId: "attendee_1",
      eventId: "event_1",
      requestedAt: new Date("2026-06-03T10:00:00.000Z"),
    });

    expect(result).toEqual({
      status: "left_waitlist",
      waitlistEntry: {
        id: "waitlist_1",
        attendeeId: "attendee_1",
        eventId: "event_1",
        position: 2,
      },
      events: [
        {
          type: "WaitlistLeft",
          waitlistEntryId: "waitlist_1",
          attendeeId: "attendee_1",
          eventId: "event_1",
        },
      ],
    });
  });

  it('returns "rejected" when the attendee has no active waitlist entry', async () => {
    const service = createRegistrationService({
      registrations: {
        findActiveWaitlistEntry: async () => null,
      },
    });

    const result = await service.leaveWaitlist({
      attendeeId: "attendee_1",
      eventId: "event_1",
      requestedAt: new Date("2026-06-03T10:00:00.000Z"),
    });

    expect(result).toEqual({
      status: "rejected",
      reason: "not_waitlisted",
      events: [],
    });
  });
});
