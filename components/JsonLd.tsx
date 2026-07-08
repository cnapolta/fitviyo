import { site, SITE_URL, sameAs } from "@/lib/site";

// Structured data: Organization + WebSite + SoftwareApplication.
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
        description: site.description,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.png`,
          width: 512,
          height: 512,
        },
        image: `${SITE_URL}${site.ogImage}`,
        contactPoint: {
          "@type": "ContactPoint",
          email: site.email,
          contactType: "customer support",
          availableLanguage: "English",
        },
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: site.name,
        description: site.description,
        inLanguage: "en-US",
        publisher: { "@id": `${SITE_URL}/#organization` },
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
        inLanguage: "en-US",
        image: `${SITE_URL}${site.ogImage}`,
        screenshot: `${SITE_URL}${site.ogImage}`,
        featureList: [
          "Build your own workouts with a set-by-set player",
          "Track calories, water, steps, and body weight",
          "Share workouts and discover the community",
          "Private by default and ad-free",
        ],
        publisher: { "@id": `${SITE_URL}/#organization` },
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
