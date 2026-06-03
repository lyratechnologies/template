# Use feature services and repositories for event workflows

We use TypeScript-familiar folder names (`services`, `repositories`, `api`, and `ui`) inside vertical feature slices while preserving clean architecture dependency rules. The `events/` feature owns event publishing, registrations, capacity, and waitlist workflows because they form one cohesive business capability; `notifications/` is separate because message delivery reacts to event outcomes without owning event-registration rules.
