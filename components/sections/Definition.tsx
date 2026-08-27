import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { definition } from "@/content/site";

export function Definition() {
  return (
    <section className="bg-ink py-24 text-paper sm:py-32">
      <Container>
        <Reveal>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-paper/45">
            The word
          </p>
        </Reveal>

        <div className="mt-10 grid gap-12 md:grid-cols-12">
          <Reveal delay={80} className="md:col-span-5">
            <p className="font-display text-[clamp(2.6rem,7vw,5rem)] leading-[0.95] tracking-[-0.035em]">
              {definition.word}
            </p>
            <p className="mt-5 flex flex-wrap items-center gap-4 text-sm text-paper/55">
              <span className="font-display italic">
                {definition.partOfSpeech}
              </span>
              <span aria-hidden="true" className="h-px w-8 bg-paper/25" />
              <span>{definition.pronunciation}</span>
            </p>
          </Reveal>

          <Reveal delay={160} className="md:col-span-7">
            <p className="font-display text-[clamp(1.6rem,3.2vw,2.6rem)] leading-[1.18] tracking-[-0.02em] text-paper">
              {definition.meaning}
            </p>
            <p className="mt-10 border-t border-paper/15 pt-8 text-lead text-paper/65">
              {definition.note}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
