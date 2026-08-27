import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Prose } from "@/components/sections/Prose";
import { PrimaryCta } from "@/components/CtaLink";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.nameTitleCase}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Start with the idea."
        intro="The best first message is a description of what you'd like to build — the project-fit questionnaire is built for exactly that."
      />
      <Prose>
        <div>
          <PrimaryCta href="/bring-your-idea">Bring Your Idea</PrimaryCta>
        </div>

        <div>
          <h2>Prefer email?</h2>
          <p>
            Write to{" "}
            <Link
              href={`mailto:${site.contactEmail}`}
              className="link-underline text-ink"
            >
              {site.contactEmail}
            </Link>
            . Please don&rsquo;t include passwords, API keys, confidential
            company data or other sensitive credentials.
          </p>
        </div>

        <div>
          <h2>Where we work</h2>
          <p>
            {site.location}, and remotely with clients elsewhere.{" "}
            {site.nameTitleCase} works with a limited number of projects at a
            time.
          </p>
        </div>
      </Prose>
    </>
  );
}
