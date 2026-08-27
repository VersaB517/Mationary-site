/**
 * Scheduling / booking — placeholder.
 *
 * No scheduling provider is connected. Booking happens only after an idea
 * has been reviewed, so the site intentionally has no public "book now" flow.
 *
 * When a provider is chosen, set NEXT_PUBLIC_BOOKING_URL and use
 * `bookingUrl()` to link out (or swap in an embedded scheduler).
 */

export function bookingUrl(): string | null {
  return process.env.NEXT_PUBLIC_BOOKING_URL ?? null;
}

export const bookingEnabled = false;
