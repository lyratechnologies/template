import type {
  RegistrationSummary,
  WaitlistEntrySummary,
} from "../../domain/registration";

export type RegistrationRepository = {
  findActiveRegistration: (input: {
    attendeeId: string;
    eventId: string;
  }) => Promise<RegistrationSummary | null>;
  findActiveWaitlistEntry: (input: {
    attendeeId: string;
    eventId: string;
  }) => Promise<WaitlistEntrySummary | null>;
  createConfirmedRegistration: (input: {
    attendeeId: string;
    eventId: string;
  }) => Promise<RegistrationSummary>;
  createWaitlistEntry: (input: {
    attendeeId: string;
    eventId: string;
  }) => Promise<WaitlistEntrySummary>;
  cancelRegistration: (input: {
    registrationId: string;
    cancelledAt: Date;
  }) => Promise<RegistrationSummary>;
  cancelWaitlistEntry: (input: {
    waitlistEntryId: string;
    cancelledAt: Date;
  }) => Promise<WaitlistEntrySummary>;
  promoteNextWaitlistEntry: (input: {
    eventId: string;
    promotedAt: Date;
  }) => Promise<{
    registration: RegistrationSummary;
    waitlistEntry: WaitlistEntrySummary;
  } | null>;
};
