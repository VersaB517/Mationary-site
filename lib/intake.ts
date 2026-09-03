/**
 * Intake submission — posts the questionnaire to `app/api/intake/route.ts`,
 * which emails it to the studio inbox via Resend.
 *
 * The form only shows its confirmation when this resolves `{ ok: true }`, so a
 * delivery failure surfaces to the visitor instead of being swallowed.
 */

import { site } from "@/content/site";

export type IntakeSubmission = Record<string, string>;

export type IntakeResult =
  | { ok: true }
  | { ok: false; message: string };

const FALLBACK_MESSAGE = `Something went wrong sending your idea. Please email ${site.contactEmail} and we'll pick it up from there.`;

export async function submitIntake(
  data: IntakeSubmission,
): Promise<IntakeResult> {
  if (!data.name?.trim() || !data.email?.trim() || !data.what_to_build?.trim()) {
    return { ok: false, message: "Please fill in the required fields." };
  }

  let response: Response;
  try {
    response = await fetch("/api/intake", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch {
    // Offline, DNS failure, request blocked — nothing reached the server.
    return { ok: false, message: FALLBACK_MESSAGE };
  }

  let result: unknown = null;
  try {
    result = await response.json();
  } catch {
    // Non-JSON response (proxy error page, truncated body).
  }

  const body = (result ?? {}) as { ok?: unknown; message?: unknown };

  if (response.ok && body.ok === true) {
    return { ok: true };
  }

  return {
    ok: false,
    message:
      typeof body.message === "string" && body.message
        ? body.message
        : FALLBACK_MESSAGE,
  };
}
