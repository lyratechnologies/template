import type { EventRepository } from "../../repositories/event";
import type {
  CreateEventInput,
  CreateEventOutput,
  CreateEventUseCase,
} from "./commands";

import { CreateEventInputSchema, CreateEventOutputSchema } from "./commands";

export type EventServiceRepositories = {
  events: Pick<EventRepository, "createEvent">;
};

export class EventService implements CreateEventUseCase {
  constructor(private readonly repositories: EventServiceRepositories) {}

  async createEvent(rawInput: CreateEventInput): Promise<CreateEventOutput> {
    const input = CreateEventInputSchema.parse(rawInput);

    if (
      input.registrationClosesAt.getTime() <=
      input.registrationOpensAt.getTime()
    ) {
      throw new Error("Registration window must close after it opens");
    }

    return CreateEventOutputSchema.parse(
      await this.repositories.events.createEvent(input)
    );
  }
}
