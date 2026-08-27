import Link from "next/link";
import { Container } from "@/components/Container";
import { footer, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <Container className="py-14 sm:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.95rem] font-medium uppercase tracking-[0.36em] text-ink">
              {site.name}
            </p>
            <p className="mt-4 font-display text-2xl text-ink sm:text-3xl">
              {footer.tagline}
            </p>
            <p className="mt-3 max-w-sm text-sm text-muted">{site.descriptor}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {footer.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-underline text-sm text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.legal}</p>
          <p>
            {site.location} · © {new Date().getFullYear()} {site.legalEntity}
          </p>
        </div>
      </Container>
    </footer>
  );
}
