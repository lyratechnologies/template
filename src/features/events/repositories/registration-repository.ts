import type {
  RegistrationSummary,
  WaitlistEntrySummary,
} from "../domain/registration";

export type RegistrationRepository = {
  findActiveRegistration: (input: {
    attendeeId: string;
    eventId: string;
  }) => Promise<RegistrationSummary | null>;
  createConfirmedRegistration: (input: {
    attendeeId: string;
    eventId: string;
  }) => Promise<RegistrationSummary>;
  createWaitlistEntry: (input: {
    attendeeId: string;
    eventId: string;
  }) => Promise<WaitlistEntrySummary>;
};
