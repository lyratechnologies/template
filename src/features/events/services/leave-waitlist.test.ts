import { describe, expect, it } from "vitest";

import { leaveWaitlist } from "./leave-waitlist";

describe("leaveWaitlist", () => {
  it('returns "left_waitlist" when the attendee has an active waitlist entry', async () => {
    const result = await leaveWaitlist(
      {
        attendeeId: "attendee_1",
        eventId: "event_1",
        requestedAt: new Date("2026-06-03T10:00:00.000Z"),
      },
      {
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
      }
    );

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
    const result = await leaveWaitlist(
      {
        attendeeId: "attendee_1",
        eventId: "event_1",
        requestedAt: new Date("2026-06-03T10:00:00.000Z"),
      },
      {
        registrations: {
          findActiveWaitlistEntry: async () => null,
          cancelWaitlistEntry: async () => {
            throw new Error("should not cancel a missing waitlist entry");
          },
        },
      }
    );

    expect(result).toEqual({
      status: "rejected",
      reason: "not_waitlisted",
      events: [],
    });
  });
});
