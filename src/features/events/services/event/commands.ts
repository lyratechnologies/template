import { z } from "zod";

import { EventSummarySchema } from "../../domain/event";

export const CreateEventInputSchema = z.object({
  title: z.string().trim().min(1),
  description: z.string().trim().min(1),
  startsAt: z.date(),
  capacity: z.number().int().positive(),
  registrationOpensAt: z.date(),
  registrationClosesAt: z.date(),
});

export type CreateEventInput = z.infer<typeof CreateEventInputSchema>;

export const CreateEventOutputSchema = EventSummarySchema;

export type CreateEventOutput = z.infer<typeof CreateEventOutputSchema>;

export interface CreateEventUseCase {
  createEvent(rawInput: CreateEventInput): Promise<CreateEventOutput>;
}
