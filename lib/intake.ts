/**
 * Intake submission — placeholder.
 *
 * Nothing is connected yet: no database, no email service, no CRM.
 * `submitIntake` validates shape and resolves, so the form is fully wired
 * on the client and ready for a real destination later.
 *
 * To connect it, replace the body with a POST to a route handler
 * (e.g. `app/api/intake/route.ts`) that forwards to your chosen provider.
 * Keep any keys in environment variables — never in source.
 */

export type IntakeSubmission = Record<string, string>;

export type IntakeResult =
  | { ok: true }
  | { ok: false; message: string };

export async function submitIntake(
  data: IntakeSubmission,
): Promise<IntakeResult> {
  if (!data.name?.trim() || !data.email?.trim() || !data.what_to_build?.trim()) {
    return { ok: false, message: "Please fill in the required fields." };
  }

  // Simulated network latency so the UI reflects real submission behaviour.
  await new Promise((resolve) => setTimeout(resolve, 700));

  if (process.env.NODE_ENV === "development") {
    console.info("[intake] submission captured (not sent anywhere yet)", data);
  }

  return { ok: true };
}
