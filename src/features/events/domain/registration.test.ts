import { describe, expect, it } from "vitest";

import {
  getActiveWaitlistRank,
  getNextWaitlistSequencePosition,
} from "./registration";

describe("getNextWaitlistSequencePosition", () => {
  it("calculates the next stored position from all existing waitlist entries", () => {
    expect(
      getNextWaitlistSequencePosition([
        {
          position: 1,
        },
      ])
    ).toBe(2);
  });

  it("returns first position when no active waitlist entries remain", () => {
    expect(getNextWaitlistSequencePosition([])).toBe(1);
  });
});

describe("getActiveWaitlistRank", () => {
  it("calculates attendee-facing rank from active waitlist entries", () => {
    expect(
      getActiveWaitlistRank({ id: "waitlist_6" }, [
        { id: "waitlist_2", position: 2 },
        { id: "waitlist_6", position: 6 },
      ])
    ).toBe(2);
  });

  it("returns null when the waitlist entry is no longer active", () => {
    expect(
      getActiveWaitlistRank({ id: "waitlist_6" }, [
        { id: "waitlist_2", position: 2 },
      ])
    ).toBeNull();
  });
});
