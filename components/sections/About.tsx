import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { about } from "@/content/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <Eyebrow>Origin</Eyebrow>
            <h2 className="mt-6 text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.1]">
              {about.heading}
            </h2>
          </Reveal>

          <div className="md:col-span-7 md:col-start-6">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph} delay={i * 90}>
                <p className="mb-6 text-lead leading-relaxed text-ink/80 last:mb-0">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
