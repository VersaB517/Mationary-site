import { Hero } from "@/components/sections/Hero";
import { Definition } from "@/components/sections/Definition";
import { Recognition } from "@/components/sections/Recognition";
import { Possibilities } from "@/components/sections/Possibilities";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Services } from "@/components/sections/Services";
import { Fit } from "@/components/sections/Fit";
import { About } from "@/components/sections/About";
import { FinalCta } from "@/components/sections/FinalCta";
import { services, site } from "@/content/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.nameTitleCase,
  slogan: site.tagline,
  description: `${site.descriptor} ${site.supportingLine}`,
  url: site.url,
  areaServed: "United States",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rochester",
    addressRegion: "NY",
    addressCountry: "US",
  },
  parentOrganization: {
    "@type": "Organization",
    name: site.legalEntity,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Guided AI building",
    itemListElement: services.items.map((item) => ({
      "@type": "Offer",
      name: item.name,
      description: item.summary,
      price: item.price.replace(/[^0-9.]/g, ""),
      priceCurrency: "USD",
    })),
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // Static, author-controlled JSON — no user input reaches this.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <Definition />
      <Recognition />
      <Possibilities />
      <HowItWorks />
      <Services />
      <Fit />
      <About />
      <FinalCta />
    </>
  );
}
