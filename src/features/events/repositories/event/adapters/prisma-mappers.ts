import type { EventRegistrationSnapshot, EventSummary } from "../../../domain/event";
import type {
  AttendeeEventParticipation,
  RegistrationSummary,
  WaitlistEntrySummary,
} from "../../../domain/registration";

import { getActiveWaitlistRank } from "../../../domain/registration";

export function toEventRegistrationSnapshot(event: {
  id: string;
  capacity: number;
  registrationOpensAt: Date;
  registrationClosesAt: Date;
  _count: {
    registrations: number;
  };
}): EventRegistrationSnapshot {
  return {
    id: event.id,
    capacity: event.capacity,
    registrationWindow: {
      opensAt: event.registrationOpensAt,
      closesAt: event.registrationClosesAt,
    },
    confirmedRegistrationCount: event._count.registrations,
  };
}

export function toEventSummary(
  event: {
    id: string;
    title: string;
    description: string;
    startsAt: Date;
    capacity: number;
    registrationOpensAt: Date;
    registrationClosesAt: Date;
    _count: {
      registrations: number;
      waitlistEntries: number;
    };
    registrations?: Array<{
      id: string;
      attendeeId: string;
      eventId: string;
    }>;
    waitlistEntries?: Array<{
      id: string;
      attendeeId: string;
      eventId: string;
      position: number;
    }>;
  },
  attendeeId?: string
): EventSummary {
  const attendeeParticipation = toAttendeeEventParticipation(event, attendeeId);

  return {
    id: event.id,
    title: event.title,
    description: event.description,
    startsAt: event.startsAt,
    capacity: event.capacity,
    registrationWindow: {
      opensAt: event.registrationOpensAt,
      closesAt: event.registrationClosesAt,
    },
    confirmedRegistrationCount: event._count.registrations,
    waitlistEntryCount: event._count.waitlistEntries,
    ...(attendeeParticipation ? { attendeeParticipation } : {}),
  };
}

function toRegistrationSummary(registration: {
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

function toWaitlistEntrySummary(
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

function toAttendeeEventParticipation(
  event: {
    registrations?: Array<{
      id: string;
      attendeeId: string;
      eventId: string;
    }>;
    waitlistEntries?: Array<{
      id: string;
      attendeeId: string;
      eventId: string;
      position: number;
    }>;
  },
  attendeeId?: string
): AttendeeEventParticipation | null {
  const registration = event.registrations?.[0];

  if (registration) {
    return {
      status: "registered",
      registration: toRegistrationSummary(registration),
    };
  }

  const waitlistEntry = event.waitlistEntries?.find(
    (activeWaitlistEntry) => activeWaitlistEntry.attendeeId === attendeeId
  );

  if (waitlistEntry) {
    const activeRank = getActiveWaitlistRank(
      waitlistEntry,
      event.waitlistEntries ?? []
    );

    return {
      status: "waitlisted",
      waitlistEntry: toWaitlistEntrySummary(
        waitlistEntry,
        activeRank ?? waitlistEntry.position
      ),
    };
  }

  return null;
}
