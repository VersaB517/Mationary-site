"use client";

import { useRef, useState } from "react";
import { intakeGroups, type IntakeField } from "@/content/intake-fields";
import { intake } from "@/content/site";
import { submitIntake } from "@/lib/intake";

type Status = "idle" | "submitting" | "done" | "error";

const inputBase =
  "w-full rounded-lg border border-line bg-paper px-4 py-3.5 text-[0.975rem] text-ink placeholder:text-muted/55 transition-colors duration-200 hover:border-ink/30 focus:border-ink focus:outline-none";

export function IntakeForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const confirmationRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Simple honeypot — bots fill hidden fields, people don't.
    if (String(formData.get("company_website") ?? "").trim() !== "") {
      setStatus("done");
      return;
    }

    const data: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (key === "company_website") continue;
      data[key] = typeof value === "string" ? value.trim() : "";
    }

    setStatus("submitting");
    setMessage("");

    const result = await submitIntake(data);

    if (result.ok) {
      setStatus("done");
      window.scrollTo({ top: 0, behavior: "smooth" });
      requestAnimationFrame(() => confirmationRef.current?.focus());
    } else {
      setStatus("error");
      setMessage(result.message);
    }
  }

  if (status === "done") {
    return (
      <div
        ref={confirmationRef}
        tabIndex={-1}
        role="status"
        className="rounded-2xl border border-line bg-paper-2 p-10 sm:p-14"
      >
        <p className="font-display text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.05] tracking-[-0.03em]">
          {intake.confirmation.heading}
        </p>
        <p className="mt-6 max-w-xl text-lead leading-relaxed text-ink/80">
          {intake.confirmation.body}
        </p>
        <p className="mt-8 max-w-xl border-t border-line pt-6 text-sm leading-relaxed text-muted">
          {intake.confirmation.note}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="space-y-16">
      {intakeGroups.map((group, groupIndex) => (
        <fieldset key={group.title} className="border-0 p-0">
          <legend className="w-full">
            <span className="flex items-baseline gap-4 border-t border-line pt-6">
              <span className="font-display text-sm tracking-[0.2em] text-accent">
                {String(groupIndex + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[clamp(1.35rem,2.4vw,1.75rem)] tracking-[-0.02em] text-ink">
                {group.title}
              </span>
            </span>
            <span className="mt-3 block max-w-xl text-[0.95rem] leading-relaxed text-muted">
              {group.description}
            </span>
          </legend>

          <div className="mt-9 space-y-9">
            {group.fields.map((field) => (
              <Field key={field.name} field={field} />
            ))}
          </div>
        </fieldset>
      ))}

      {/* Honeypot, hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="border-t border-line pt-10">
        <p className="max-w-2xl rounded-xl bg-paper-2 p-6 text-sm leading-relaxed text-muted">
          <span className="font-medium text-ink">A quick note on privacy. </span>
          {intake.privacyNote}
        </p>

        {status === "error" && message ? (
          <p role="alert" className="mt-6 text-sm text-accent">
            {message}
          </p>
        ) : null}

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-[0.95rem] font-medium text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-2 disabled:translate-y-0 disabled:opacity-60"
          >
            {status === "submitting" ? intake.submittingLabel : intake.submitLabel}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </button>
          <p className="max-w-xs text-xs leading-relaxed text-muted">
            No payment, no booking, no commitment.
          </p>
        </div>
      </div>
    </form>
  );
}

function Field({ field }: { field: IntakeField }) {
  const helpId = "help" in field && field.help ? `${field.name}-help` : undefined;

  const label = (
    <span className="block text-[0.975rem] font-medium text-ink">
      {field.label}
      {field.required ? (
        <span className="ml-1 text-accent" aria-hidden="true">
          *
        </span>
      ) : (
        <span className="ml-2 text-xs font-normal uppercase tracking-[0.14em] text-muted/70">
          Optional
        </span>
      )}
    </span>
  );

  const help = helpId ? (
    <span id={helpId} className="mt-2 block text-[0.9rem] leading-relaxed text-muted">
      {"help" in field ? field.help : null}
    </span>
  ) : null;

  if (field.kind === "choice") {
    return (
      <fieldset className="border-0 p-0">
        <legend className="mb-4">
          {label}
          {help}
        </legend>
        <div className="flex flex-wrap gap-3">
          {field.options.map((option) => (
            <label
              key={option}
              className="group cursor-pointer rounded-full border border-line px-5 py-2.5 text-[0.925rem] text-muted transition-colors duration-200 hover:border-ink/40 has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-paper has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent"
            >
              <input
                type="radio"
                name={field.name}
                value={option}
                required={field.required}
                className="sr-only"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>
    );
  }

  if (field.kind === "textarea") {
    return (
      <div>
        <label htmlFor={field.name}>
          {label}
          {help}
        </label>
        <textarea
          id={field.name}
          name={field.name}
          rows={field.rows ?? 4}
          required={field.required}
          placeholder={field.placeholder}
          aria-describedby={helpId}
          className={`${inputBase} mt-3 resize-y leading-relaxed`}
        />
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={field.name}>
        {label}
        {help}
      </label>
      <input
        id={field.name}
        name={field.name}
        type={field.kind}
        required={field.required}
        placeholder={field.placeholder}
        autoComplete={field.autoComplete}
        aria-describedby={helpId}
        className={`${inputBase} mt-3 max-w-md`}
      />
    </div>
  );
}
