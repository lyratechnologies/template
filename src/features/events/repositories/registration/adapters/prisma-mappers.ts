import type {
  RegistrationSummary,
  WaitlistEntrySummary,
} from "../../../domain/registration";

export function toRegistrationSummary(registration: {
  id: string;
  attendeeId: string;
  eventId: string;
}): RegistrationSummary {
  return {
    id: registration.id,
    attendeeId: registration.attendeeId,
    eventId: registration.eventId,
    status: "confirmed",
  };
}

export function toWaitlistEntrySummary(
  waitlistEntry: {
    id: string;
    attendeeId: string;
    eventId: string;
    position: number;
  },
  position = waitlistEntry.position
): WaitlistEntrySummary {
  return {
    id: waitlistEntry.id,
    attendeeId: waitlistEntry.attendeeId,
    eventId: waitlistEntry.eventId,
    position,
  };
}
