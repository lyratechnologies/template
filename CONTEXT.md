# Event Registration

This context describes the demo domain used by the template: publishing events, accepting registrations, and managing waitlist outcomes.

## Language

**Event**:
A scheduled offering that an attendee can register for while registration is open.
_Avoid_: Meeting, session, class

**Attendee**:
A person attempting to participate in an event.
_Avoid_: User, account, customer

**Registration**:
An attendee's active or cancelled claim to attend an event.
_Avoid_: Booking, ticket, RSVP

**Waitlist Entry**:
An attendee's ordered place in line when an event has no available capacity.
_Avoid_: Queue item, pending registration

**Capacity**:
The maximum number of confirmed registrations an event can accept.
_Avoid_: Limit, seats

**Registration Window**:
The time range during which attendees may register for an event.
_Avoid_: Signup period, enrollment window

**Notification**:
A message prepared for delivery to an attendee after a meaningful event-registration outcome, especially when another attendee's action changes their registration state.
_Avoid_: Email, alert, message

## Relationships

- An **Event** has one **Capacity** and one **Registration Window**
- An **Attendee** may have at most one active **Registration** for an **Event**
- An **Event** has zero or more confirmed **Registrations**
- An **Event** has zero or more **Waitlist Entries**
- A **Waitlist Entry** may become a confirmed **Registration** when capacity becomes available
- A cancelled **Registration** no longer counts against **Capacity**
- A **Notification** is addressed to one **Attendee**
- A **Notification** is about one event-registration outcome, such as a **Waitlist Entry** becoming a confirmed **Registration**

## Example dialogue

> **Dev:** "If an **Attendee** registers after the **Event** is full, do we reject them?"
> **Domain expert:** "No. If the **Registration Window** is still open, create a **Waitlist Entry**. If a confirmed **Registration** is cancelled later, promote the next **Waitlist Entry**."

## Flagged ambiguities

- "user" refers to authentication identity in infrastructure. In the event-registration domain, use **Attendee**.
- "waitlist" is part of the **Registration** workflow in this template, not a separate bounded context.
- "email" is a delivery mechanism for a **Notification**, not the domain term.
