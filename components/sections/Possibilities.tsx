import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { possibilities } from "@/content/site";

export function Possibilities() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <Eyebrow>{possibilities.eyebrow}</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-h2 leading-[1.08]">
            {possibilities.heading}
          </h2>
        </Reveal>

        <ul className="mt-14 max-w-3xl space-y-6 sm:mt-16 sm:space-y-8">
          {possibilities.items.map((item, i) => (
            <Reveal as="li" key={item} delay={i * 80}>
              <p className="flex gap-4 font-display text-[clamp(1.2rem,2.4vw,1.75rem)] leading-[1.3] tracking-[-0.015em] text-ink/85 sm:gap-6">
                <span aria-hidden="true" className="text-[0.85em] text-accent">
                  —
                </span>
                <span>{item}</span>
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={140}>
          <p className="mt-14 max-w-2xl border-t border-line pt-8 text-lead leading-relaxed text-muted sm:mt-16">
            {possibilities.closing}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
