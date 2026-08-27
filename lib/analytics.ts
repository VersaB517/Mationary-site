/**
 * Analytics — placeholder.
 *
 * No analytics script is loaded and no visitor data is collected.
 * `track` is a no-op that gives call sites a stable shape for later.
 */

export const analyticsEnabled = Boolean(process.env.NEXT_PUBLIC_ANALYTICS_ID);

export function track(_event: string, _properties?: Record<string, unknown>) {
  if (!analyticsEnabled) return;
  // Intentionally empty until an analytics provider is chosen.
}
