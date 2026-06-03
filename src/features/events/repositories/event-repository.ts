import type { EventRegistrationSnapshot, EventSummary } from "../domain/event";

export type CreateEventRecordInput = {
  title: string;
  description: string;
  startsAt: Date;
  capacity: number;
  registrationOpensAt: Date;
  registrationClosesAt: Date;
};

export type EventRepository = {
  createEvent: (input: CreateEventRecordInput) => Promise<EventSummary>;
  findRegistrationSnapshot: (
    eventId: string
  ) => Promise<EventRegistrationSnapshot | null>;
  listOpenEvents: (input?: { attendeeId?: string }) => Promise<EventSummary[]>;
};
