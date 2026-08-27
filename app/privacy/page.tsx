import type { Metadata } from "next";
import { PageHeader, PlaceholderNote, Prose } from "@/components/sections/Prose";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${site.nameTitleCase} handles the information you share.`,
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="What we do with what you share."
        intro="Plain language, kept short on purpose."
      />
      <Prose>
        <PlaceholderNote>
          Placeholder. This page describes how the site works today and is
          intended to be reviewed before launch.
        </PlaceholderNote>

        <div>
          <h2>What this site collects</h2>
          <p>
            The site does not use analytics, advertising trackers or cookies for
            tracking. Nothing on this site requires an account.
          </p>
        </div>

        <div>
          <h2>The project-fit form</h2>
          <p>
            Information you enter in the project-fit questionnaire is used for
            one purpose: to understand your idea and respond to you about
            whether {site.nameTitleCase} is a good place to start. It is not
            sold, and it is not shared for marketing.
          </p>
          <p>
            Please do not submit passwords, API keys, confidential company data,
            protected personal or health information, or other sensitive
            credentials through the form.
          </p>
        </div>

        <div>
          <h2>Questions</h2>
          <p>
            Email {site.contactEmail} and we&rsquo;ll answer directly.
          </p>
        </div>

        <PlaceholderNote>
          {site.nameTitleCase} is operated by {site.legalEntity}.
        </PlaceholderNote>
      </Prose>
    </>
  );
}
