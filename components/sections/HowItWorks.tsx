import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { howItWorks } from "@/content/site";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-paper-2 py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <Eyebrow>The Mationary Method</Eyebrow>
            <h2 className="mt-6 text-h2 leading-[1.08]">{howItWorks.heading}</h2>
          </Reveal>
          <Reveal delay={100} className="md:col-span-6 md:col-start-7">
            <p className="text-lead leading-relaxed text-muted">
              {howItWorks.intro}
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2">
          {howItWorks.steps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 80} className="bg-paper">
              <div className="flex h-full flex-col gap-5 p-8 sm:p-10">
                <span className="font-display text-sm tracking-[0.2em] text-accent">
                  {step.number}
                </span>
                <h3 className="text-[clamp(1.35rem,2.2vw,1.75rem)] leading-tight">
                  {step.title}
                </h3>
                <p className="text-[0.975rem] leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
