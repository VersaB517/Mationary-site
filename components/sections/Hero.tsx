import { Container } from "@/components/Container";
import { PrimaryCta, SecondaryCta } from "@/components/CtaLink";
import { Reveal } from "@/components/Reveal";
import { hero, site } from "@/content/site";

const meta = [
  "Guided building, not outsourcing",
  "A limited number of projects",
  "Rochester, NY & remote",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      {/* Restrained atmosphere: one soft warm wash, no gradients-as-decoration. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-56 h-[40rem] bg-[radial-gradient(55%_55%_at_50%_0%,#f2e9df_0%,transparent_72%)] opacity-70"
      />

      <Container className="relative">
        <Reveal>
          <p className="max-w-xs text-[0.68rem] sm:max-w-none font-medium uppercase leading-relaxed tracking-[0.18em] text-muted sm:text-[0.7rem] sm:tracking-[0.28em]">
            {site.descriptor}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="sr-only">
            {site.nameTitleCase} — {site.tagline} {site.descriptor}
          </h1>
          <p
            aria-hidden="true"
            className="mt-8 font-display text-[clamp(2.6rem,13.2vw,11rem)] leading-[0.86] tracking-[-0.045em] text-ink"
          >
            {site.name}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 border-t border-line pt-10 md:grid-cols-12 md:gap-12">
          <Reveal delay={140} className="md:col-span-6 lg:col-span-5">
            <p className="font-display text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.08] tracking-[-0.02em] text-ink">
              {hero.tagline}
            </p>
            <p className="mt-6 text-lead leading-relaxed text-ink/80">
              {hero.supporting}
            </p>
          </Reveal>

          <Reveal delay={220} className="md:col-span-6 md:col-start-8 lg:col-span-5 lg:col-start-8">
            <p className="text-base leading-relaxed text-muted">{hero.body}</p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <PrimaryCta href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </PrimaryCta>
              <SecondaryCta href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </SecondaryCta>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <ul className="mt-14 flex flex-wrap gap-x-10 gap-y-3 border-t border-line pt-6 text-xs uppercase tracking-[0.16em] text-muted">
            {meta.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
