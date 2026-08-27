import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-line py-16 sm:py-24">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-3xl text-h1 leading-[1.04]">{title}</h1>
        {intro ? (
          <p className="mt-8 max-w-2xl text-lead leading-relaxed text-ink/80">
            {intro}
          </p>
        ) : null}
      </Container>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl space-y-10 text-[1.02rem] leading-relaxed text-ink/80 [&_h2]:pt-2 [&_h2]:text-2xl [&_h2]:text-ink [&_li]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </div>
      </Container>
    </section>
  );
}

export function PlaceholderNote({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-xl border border-line bg-paper-2 p-6 text-sm leading-relaxed text-muted">
      {children}
    </p>
  );
}
