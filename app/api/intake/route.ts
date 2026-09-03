import { NextResponse } from "next/server";
import { Resend } from "resend";
import { intakeGroups } from "@/content/intake-fields";
import { site } from "@/content/site";

/**
 * Intake delivery — emails a submission to the studio inbox via Resend.
 *
 * Configuration lives entirely in environment variables (see .env.example):
 * RESEND_API_KEY, INTAKE_TO_EMAIL, INTAKE_FROM_EMAIL. The sender address must
 * be on a domain verified in Resend, or the send is rejected.
 *
 * Nothing is stored — the submission exists only in the email that is sent.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Long enough for a genuinely detailed answer, short enough to bound abuse. */
const MAX_FIELD_LENGTH = 5000;
const REQUIRED_FIELDS = ["name", "email", "what_to_build"] as const;

const KNOWN_FIELDS = new Set(
  intakeGroups.flatMap((group) => group.fields.map((field) => field.name)),
);

const FALLBACK_MESSAGE = `Something went wrong sending your idea. Please email ${site.contactEmail} and we'll pick it up from there.`;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Header values must stay on one line. */
function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

/** Keep only questionnaire fields, trimmed and length-capped. */
function normalize(payload: Record<string, unknown>): Record<string, string> {
  const data: Record<string, string> = {};
  for (const [key, value] of Object.entries(payload)) {
    if (!KNOWN_FIELDS.has(key) || typeof value !== "string") continue;
    const trimmed = value.trim();
    if (trimmed) data[key] = trimmed.slice(0, MAX_FIELD_LENGTH);
  }
  return data;
}

/** Group answers under their questionnaire headings, skipping blanks. */
function sections(data: Record<string, string>) {
  return intakeGroups
    .map((group) => ({
      title: group.title,
      answers: group.fields
        .filter((field) => data[field.name])
        .map((field) => ({ label: field.label, value: data[field.name] })),
    }))
    .filter((group) => group.answers.length > 0);
}

function toText(data: Record<string, string>): string {
  return sections(data)
    .map(
      (group) =>
        `${group.title.toUpperCase()}\n\n` +
        group.answers
          .map((answer) => `${answer.label}\n${answer.value}`)
          .join("\n\n"),
    )
    .join("\n\n---\n\n");
}

function toHtml(data: Record<string, string>): string {
  const body = sections(data)
    .map(
      (group) =>
        `<h2 style="margin:32px 0 16px;font:600 13px/1.4 system-ui,sans-serif;letter-spacing:0.12em;text-transform:uppercase;color:#6d6459">${escapeHtml(
          group.title,
        )}</h2>` +
        group.answers
          .map(
            (answer) =>
              `<p style="margin:0 0 4px;font:600 14px/1.5 system-ui,sans-serif;color:#16130f">${escapeHtml(
                answer.label,
              )}</p>` +
              `<p style="margin:0 0 20px;font:400 15px/1.6 system-ui,sans-serif;color:#221d18;white-space:pre-wrap">${escapeHtml(
                answer.value,
              )}</p>`,
          )
          .join(""),
    )
    .join('<hr style="border:0;border-top:1px solid #e2dbd0;margin:28px 0" />');

  return `<div style="max-width:640px;margin:0 auto;padding:24px">${body}</div>`;
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: FALLBACK_MESSAGE },
      { status: 400 },
    );
  }

  if (typeof payload !== "object" || payload === null || Array.isArray(payload)) {
    return NextResponse.json(
      { ok: false, message: FALLBACK_MESSAGE },
      { status: 400 },
    );
  }

  const raw = payload as Record<string, unknown>;

  // Honeypot — accept silently so bots learn nothing.
  if (typeof raw.company_website === "string" && raw.company_website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const data = normalize(raw);

  const missing = REQUIRED_FIELDS.filter((field) => !data[field]);
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, message: "Please fill in the required fields." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INTAKE_FROM_EMAIL;
  const to = process.env.INTAKE_TO_EMAIL ?? site.contactEmail;

  if (!apiKey || !from) {
    console.error(
      "[intake] not configured — RESEND_API_KEY and INTAKE_FROM_EMAIL are both required.",
    );
    return NextResponse.json(
      { ok: false, message: FALLBACK_MESSAGE },
      { status: 500 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { data: sent, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: singleLine(data.email),
      subject: `New idea — ${singleLine(data.name)}`,
      text: toText(data),
      html: toHtml(data),
    });

    if (error) {
      console.error("[intake] Resend rejected the send:", error);
      return NextResponse.json(
        { ok: false, message: FALLBACK_MESSAGE },
        { status: 502 },
      );
    }

    console.info("[intake] sent", sent?.id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[intake] send failed:", error);
    return NextResponse.json(
      { ok: false, message: FALLBACK_MESSAGE },
      { status: 502 },
    );
  }
}
