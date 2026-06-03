import type { EventRepository } from "../repositories/event-repository";
import { z } from "zod";

import { EventSummarySchema } from "../domain/event";

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

export type CreateEventRepositories = {
  events: Pick<EventRepository, "createEvent">;
};

export async function createEvent(
  rawInput: CreateEventInput,
  repositories: CreateEventRepositories
): Promise<CreateEventOutput> {
  const input = CreateEventInputSchema.parse(rawInput);

  if (
    input.registrationClosesAt.getTime() <= input.registrationOpensAt.getTime()
  ) {
    throw new Error("Registration window must close after it opens");
  }

  return CreateEventOutputSchema.parse(
    await repositories.events.createEvent(input)
  );
}
