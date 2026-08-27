import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { IntakeForm } from "@/components/intake/IntakeForm";
import { intake, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Bring Your Idea",
  description:
    "Tell Mationary about the app, agent, automation or tool you'd like to build. Every project begins with a reviewed idea — no booking required.",
  alternates: { canonical: "/bring-your-idea" },
  openGraph: {
    title: `Bring Your Idea — ${site.nameTitleCase}`,
    description:
      "Tell us about the app, agent, automation or tool you'd like to build.",
    url: "/bring-your-idea",
  },
};

const steps = [
  "You tell us about the idea.",
  "We read it and consider fit, feasibility and where AI-assisted building genuinely helps.",
  "We reply with an honest answer — and, if it's a fit, what we'd recommend starting with.",
];

export default function BringYourIdeaPage() {
  return (
    <>
      <section className="border-b border-line py-16 sm:py-24">
        <Container>
          <Reveal>
            <Eyebrow>{intake.eyebrow}</Eyebrow>
            <h1 className="mt-6 max-w-3xl text-h1 leading-[1.04]">
              {intake.heading}
            </h1>
            <p className="mt-8 max-w-2xl text-lead leading-relaxed text-ink/80">
              {intake.intro}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <h2 className="text-xl">What happens next</h2>
                <ol className="mt-6 space-y-5">
                  {steps.map((step, i) => (
                    <li key={step} className="flex gap-4 text-[0.95rem] leading-relaxed text-muted">
                      <span className="font-display text-sm tracking-[0.2em] text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-8 border-t border-line pt-6 text-[0.9rem] leading-relaxed text-muted">
                  {intake.reviewNote}
                </p>
                <p className="mt-6 text-[0.9rem] leading-relaxed text-muted">
                  Curious about the formats first?{" "}
                  <Link href="/#services" className="link-underline text-ink">
                    See the ways to work together
                  </Link>
                  .
                </p>
              </div>
            </Reveal>

            <div className="lg:col-span-7 lg:col-start-6">
              <IntakeForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
