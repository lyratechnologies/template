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

export type CreateEventPorts = {
  createEvent: (input: CreateEventInput) => Promise<CreateEventOutput>;
};

export async function createEvent(
  rawInput: CreateEventInput,
  ports: CreateEventPorts,
): Promise<CreateEventOutput> {
  const input = CreateEventInputSchema.parse(rawInput);

  if (input.registrationClosesAt.getTime() <= input.registrationOpensAt.getTime()) {
    throw new Error("Registration window must close after it opens");
  }

  return CreateEventOutputSchema.parse(await ports.createEvent(input));
}
