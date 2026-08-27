import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { fit } from "@/content/site";

export function Fit() {
  return (
    <section id="fit" className="scroll-mt-24 bg-paper-2 py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <Eyebrow>Project fit</Eyebrow>
            <h2 className="mt-6 text-h2 leading-[1.08]">{fit.heading}</h2>
          </Reveal>
          <Reveal delay={100} className="md:col-span-5 md:col-start-8">
            <p className="text-lead leading-relaxed text-ink/80">{fit.lead}</p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-14 grid gap-8 border-t border-line pt-12 md:grid-cols-2">
            {fit.body.map((paragraph) => (
              <p key={paragraph} className="text-[0.975rem] leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2">
          {[fit.goodFit, fit.notFit].map((group, i) => (
            <Reveal key={group.title} delay={i * 90} className="bg-paper">
              <div className="h-full p-8 sm:p-10">
                <h3 className="text-xl">{group.title}</h3>
                <ul className="mt-6 space-y-4">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 border-b border-line pb-4 text-[0.95rem] leading-relaxed text-muted last:border-0 last:pb-0"
                    >
                      <span
                        aria-hidden="true"
                        className={i === 0 ? "text-accent" : "text-muted/50"}
                      >
                        {i === 0 ? "—" : "·"}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-12 max-w-3xl border-t border-line pt-8 text-sm leading-relaxed text-muted">
            {fit.note}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
