import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { PrimaryCta } from "@/components/CtaLink";
import { Reveal } from "@/components/Reveal";
import { services } from "@/content/site";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <Eyebrow>Services · Launch pricing</Eyebrow>
            <h2 className="mt-6 text-h2 leading-[1.08]">{services.heading}</h2>
          </Reveal>
          <Reveal delay={100} className="md:col-span-5 md:col-start-8">
            <p className="text-lead leading-relaxed text-muted">
              {services.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.items.map((item, i) => (
            <Reveal key={item.id} delay={i * 90} className="h-full">
              <article
                className={`flex h-full flex-col rounded-2xl border p-8 transition-colors duration-500 sm:p-10 ${
                  item.featured
                    ? "border-ink bg-ink text-paper"
                    : "border-line bg-paper hover:border-ink/35"
                }`}
              >
                <h3
                  className={`text-[clamp(1.4rem,2.4vw,1.85rem)] leading-tight ${
                    item.featured ? "text-paper" : "text-ink"
                  }`}
                >
                  {item.name}
                </h3>

                <p
                  className={`mt-3 text-xs uppercase tracking-[0.16em] ${
                    item.featured ? "text-paper/55" : "text-muted"
                  }`}
                >
                  {item.duration}
                </p>

                <p
                  className={`mt-7 font-display text-4xl tracking-[-0.03em] ${
                    item.featured ? "text-paper" : "text-ink"
                  }`}
                >
                  {item.price}
                </p>

                <p
                  className={`mt-6 text-[0.975rem] leading-relaxed ${
                    item.featured ? "text-paper/75" : "text-muted"
                  }`}
                >
                  {item.summary}
                </p>

                <ul
                  className={`mt-8 space-y-3 border-t pt-8 text-[0.925rem] leading-relaxed ${
                    item.featured
                      ? "border-paper/15 text-paper/75"
                      : "border-line text-muted"
                  }`}
                >
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className={item.featured ? "text-paper/40" : "text-accent"}
                      >
                        —
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-14 grid gap-8 border-t border-line pt-10 md:grid-cols-12">
            <p className="text-sm leading-relaxed text-muted md:col-span-7">
              {services.disclaimer}
            </p>
            <div className="md:col-span-4 md:col-start-9">
              <PrimaryCta href="/bring-your-idea">Bring Your Idea</PrimaryCta>
              <p className="mt-4 text-xs leading-relaxed text-muted">
                Booking happens after we&rsquo;ve read your idea — nothing is
                purchased on this site.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
