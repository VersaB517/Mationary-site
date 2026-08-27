import { Container } from "@/components/Container";
import { PrimaryCta } from "@/components/CtaLink";
import { Reveal } from "@/components/Reveal";
import { finalCta } from "@/content/site";

export function FinalCta() {
  return (
    <section className="bg-ink py-24 text-paper sm:py-36">
      <Container>
        <Reveal>
          <h2 className="max-w-4xl text-[clamp(2.1rem,5.4vw,4.25rem)] leading-[1.03] tracking-[-0.03em] text-paper">
            {finalCta.heading}
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-8 max-w-xl text-lead leading-relaxed text-paper/65">
            {finalCta.supporting}
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-12">
            <PrimaryCta href={finalCta.cta.href} tone="paper">
              {finalCta.cta.label}
            </PrimaryCta>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
