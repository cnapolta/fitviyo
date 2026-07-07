import { site, SITE_URL, sameAs } from "@/lib/site";
import { faqs } from "@/lib/content";

// Structured data: SoftwareApplication + Organization + FAQPage (LANDING.md §6).
// Rendered server-side as a single <script type="application/ld+json">.
export function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: site.name,
        url: SITE_URL,
        email: site.email,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.png`,
        },
        sameAs,
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#app`,
        name: site.name,
        applicationCategory: "HealthApplication",
        applicationSubCategory: "Health & Fitness",
        operatingSystem: "iOS",
        description: site.description,
        url: SITE_URL,
        publisher: { "@id": `${SITE_URL}/#organization` },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Freemium — free core app with an optional Pro tier and a 7-day free trial.",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
