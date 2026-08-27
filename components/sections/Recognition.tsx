import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { recognition } from "@/content/site";

export function Recognition() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <h2 className="max-w-2xl text-h2 leading-[1.1]">
            {recognition.heading}
          </h2>
        </Reveal>

        <ul className="mt-14 space-y-0">
          {recognition.thoughts.map((thought, i) => (
            <Reveal as="li" key={thought} delay={i * 90}>
              <p className="border-t border-line py-8 font-display text-[clamp(1.35rem,3vw,2.15rem)] leading-[1.25] tracking-[-0.015em] text-ink/85 sm:py-10">
                {thought}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <p className="mt-12 border-t border-ink/25 pt-10 font-display text-[clamp(1.6rem,3.4vw,2.5rem)] leading-[1.15] tracking-[-0.02em]">
            {recognition.closing}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
