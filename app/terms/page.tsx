import type { Metadata } from "next";
import { PageHeader, PlaceholderNote, Prose } from "@/components/sections/Prose";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `The scope of what ${site.nameTitleCase} provides.`,
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Terms"
        title="What Mationary provides — and what it doesn't."
        intro="Clear expectations make for better work."
      />
      <Prose>
        <PlaceholderNote>
          Placeholder. These terms outline the intended scope of the service and
          are intended to be reviewed before launch.
        </PlaceholderNote>

        <div>
          <h2>The service</h2>
          <p>
            {site.nameTitleCase} provides education, guidance and collaborative
            AI-assisted building. Sessions are private and centered on your
            project, with you participating in the work rather than handing it
            off entirely.
          </p>
        </div>

        <div>
          <h2>Outcomes</h2>
          <p>
            Results vary with the complexity of the idea and the time available.
            No engagement guarantees a completed or production-ready
            application. Exact scope depends on the project.
          </p>
        </div>

        <div>
          <h2>What this is not</h2>
          <p>
            {site.nameTitleCase} does not replace production software
            engineering, cybersecurity review, legal review, regulatory or
            compliance review, or enterprise IT implementation where those are
            required. High-risk, highly regulated, safety-critical or deeply
            specialized projects may be declined or referred elsewhere.
          </p>
        </div>

        <div>
          <h2>Project acceptance</h2>
          <p>
            Submitting an idea is not an automatic acceptance of the project.
            Ideas are reviewed before any paid service is recommended or booked.
            Acceptance is at {site.nameTitleCase}&rsquo;s discretion based on
            fit, feasibility, risk, scope, and whether the project is
            appropriate for collaborative AI-assisted building.
          </p>
        </div>

        <div>
          <h2>Your work</h2>
          <p>
            What you create is yours. Your idea, your project, your ownership.
          </p>
        </div>

        <PlaceholderNote>
          {site.nameTitleCase} is operated by {site.legalEntity}.
        </PlaceholderNote>
      </Prose>
    </>
  );
}
