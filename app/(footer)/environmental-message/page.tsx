import type { Metadata } from "next";
import { EnvironmentalSection } from "types/commonTypes";
import { getSpecialPagesData } from "db/GetSpecialPagesData";

/* — Enhanced Metadata for SEO & Social Sharing (title < 70 chars) — */
export const metadata: Metadata = {
  title: "Environmental Commitment | MSE Printing",
  description:
    "Discover how MSE Printing reduces its environmental footprint through sustainable materials, lean workflows, and responsible sourcing.",
  keywords: [
    "environmental responsibility",
    "sustainable printing",
    "green printing Minneapolis",
    "eco-friendly print materials",
    "recycled paper",
    "soy ink printing",
    "MSE Printing sustainability",
    "environmental policy",
    "green business practices",
    "sustainable workflow",
  ],
  applicationName: "MSE Printing",
  category: "Environmental Commitment",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/environmental-message",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ABCD1234xyz", // Replace with your actual Google Search Console code
  },
  openGraph: {
    title: "Environmental Commitment | MSE Printing",
    description:
      "Learn how MSE Printing powers your brand while protecting the planet—digital technologies, recycled papers, soy inks, and more.",
    url: "https://www.mseprinting.com/environmental-message",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.mseprinting.com/images/footer-images/environmental_message.webp",
        width: 800,
        height: 630,
        alt: "Environmental Commitment at MSE Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Environmental Commitment | MSE Printing",
    description:
      "Explore how MSE Printing reduces its footprint—sustainable materials, recycled paper, and eco-friendly processes.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/footer-images/environmental_message.webp",
        alt: "Eco-friendly printing by MSE Printing",
      },
    ],
  },
  other: {
    "geo.region": "US-MN",
    "geo.placename": "Minneapolis",
    "geo.position": "45.0230;-93.2790",
    ICBM: "45.0230, -93.2790",
    "business:contact_data:street_address": "3839 N Washington Ave Ste. 101",
    "business:contact_data:locality": "Minneapolis",
    "business:contact_data:region": "MN",
    "business:contact_data:postal_code": "55412",
    "business:contact_data:country_name": "USA",
    "business:contact_data:phone_number": "763-542-8812",
    "og:email": "info@mseprinting.com",
    "og:phone_number": "763-542-8812",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  authors: [{ name: "MSE Printing", url: "https://www.mseprinting.com" }],
  creator: "MSE Printing",
  publisher: "MSE Printing",
};

/* — Schema.org Article structured data for Environmental Commitment — */
const ArticleSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://www.mseprinting.com/environmental-message#commitment",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mseprinting.com/environmental-message",
    },
    headline: "Environmental Commitment",
    description:
      "Discover how MSE Printing reduces its environmental footprint through sustainable materials, lean workflows, and responsible sourcing.",
    author: {
      "@type": "Organization",
      name: "MSE Printing",
      url: "https://www.mseprinting.com",
    },
    publisher: {
      "@type": "Organization",
      name: "MSE Printing",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mseprinting.com/favicon.ico",
      },
    },
    datePublished: "2024-01-01",
    dateModified: "2025-05-24",
    image: [
      "https://www.mseprinting.com/images/footer-images/environmental_message.webp",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default async function EnvironmentalCommitment() {
  const { environmentalMessageData = [] } = await getSpecialPagesData(
    "/environmental-message"
  );

  // Apply runtime sort only if section_index is available
  const sections = (
    environmentalMessageData.flat() as (EnvironmentalSection & {
      section_index?: number;
    })[]
  ).sort((a, b) => (a.section_index ?? 0) - (b.section_index ?? 0));

  if (sections.length === 0) {
    return (
      <main className="max-w-xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Environmental Commitment</h1>
        <p className="text-red-600">
          Environmental message content is not yet available.
        </p>
      </main>
    );
  }

  const pageTitle = "MSE Printing – Environmental Commitment" as const;

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-black dark:text-white ">
      <ArticleSchema />
      <h1 className="text-4xl font-bold text-center mb-10">{pageTitle}</h1>

      {sections.map((section) => (
        <section key={section.id} id={section.id} className="mt-12">
          {section.heading && (
            <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
          )}

          {section.content.map((p, idx) => (
            <p
              key={idx}
              className="mb-4 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}

          {section.list && (
            <ul className="list-disc list-inside space-y-2">
              {section.list.map((item, idx) => (
                <li
                  key={idx}
                  className="leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          )}
        </section>
      ))}
    </main>
  );
}
