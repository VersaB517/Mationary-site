import { Container } from "@/components/Container";
import { PrimaryCta } from "@/components/CtaLink";

export default function NotFound() {
  return (
    <section className="py-28 sm:py-40">
      <Container>
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted">
          404
        </p>
        <h1 className="mt-6 max-w-2xl text-h1 leading-[1.04]">
          This page hasn&rsquo;t been built yet.
        </h1>
        <p className="mt-8 max-w-lg text-lead leading-relaxed text-muted">
          Fitting, in a way. Let&rsquo;s go back to something that exists.
        </p>
        <div className="mt-10">
          <PrimaryCta href="/">Back to Mationary</PrimaryCta>
        </div>
      </Container>
    </section>
  );
}
