import { describe, expect, it } from "vitest";

import { createEvent } from "../create-event";

describe("createEvent", () => {
  it("creates an event with registration open before the event starts", async () => {
    const startsAt = new Date("2026-06-05T10:00:00.000Z");
    const registrationOpensAt = new Date("2026-06-03T10:00:00.000Z");

    const result = await createEvent(
      {
        title: "Architecture migration review",
        description: "Walk through events and registrations slices.",
        startsAt,
        capacity: 12,
        registrationOpensAt,
        registrationClosesAt: startsAt,
      },
      {
        events: {
          createEvent: async (input) => ({
            id: "event_1",
            title: input.title,
            description: input.description,
            startsAt: input.startsAt,
            capacity: input.capacity,
            registrationWindow: {
              opensAt: input.registrationOpensAt,
              closesAt: input.registrationClosesAt,
            },
            confirmedRegistrationCount: 0,
            waitlistEntryCount: 0,
          }),
        },
      }
    );

    expect(result).toEqual({
      id: "event_1",
      title: "Architecture migration review",
      description: "Walk through events and registrations slices.",
      startsAt,
      capacity: 12,
      registrationWindow: {
        opensAt: registrationOpensAt,
        closesAt: startsAt,
      },
      confirmedRegistrationCount: 0,
      waitlistEntryCount: 0,
    });
  });
});
