import React from "react";
import type {
  TitleContentTypes,
  SectionContent,
} from "../../../types/commonTypes";
import { getSpecialPagesData } from "db/GetSpecialPagesData";

/* — Metadata for SEO, Social Sharing, and Accessibility — */
export const metadata = {
  title: "Accessibility Statement | MSE Printing",
  description:
    "Learn how MSE Printing designs a barrier-free digital experience that meets WCAG 2.1 AA guidelines, our ongoing accessibility roadmap, and how you can request assistance or provide feedback.",
  keywords: [
    "accessibility statement",
    "WCAG 2.1 AA compliance",
    "inclusive web design",
    "accessible printing services",
    "MSE Printing accessibility",
    "website accessibility Minneapolis",
    "barrier-free experience",
    "digital accessibility statement",
    "assistive technology support",
    "accessible formats",
  ],
  applicationName: "MSE Printing",
  category: "Accessibility Statement",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/accessibility",
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

  openGraph: {
    title: "Accessibility Statement | MSE Printing",
    description:
      "Discover MSE Printing’s commitment to inclusive web design, recent WCAG 2.1 AA improvements, and ways to contact us for accessible formats.",
    url: "https://www.mseprinting.com/accessibility",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.mseprinting.com/images/footer-images/accessibility.webp",
        width: 800,
        height: 630,
        alt: "MSE Printing Accessibility Statement - Inclusive Digital Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Statement | MSE Printing",
    description:
      "Read MSE Printing's Accessibility Statement—barrier-free digital experience and support for all users.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/footer-images/accessibility.webp",
        alt: "Accessibility Statement by MSE Printing",
      },
    ],
  },
  other: {
    "geo.region": "US-MN",
    "geo.placename": "Minneapolis",
    "geo.position": "45.0230;-93.2790",
    ICBM: "45.0230, -93.2790",
    "business:contact_data:street_address": "3839 Washington Ave N Ste. 103",
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

/* — Viewport settings — */
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "normal",
};

/* — Article Schema.org structured data for Accessibility Statement — */
const ArticleSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://www.mseprinting.com/accessibility#statement",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mseprinting.com/accessibility",
    },
    headline: "Accessibility Statement",
    description:
      "Learn how MSE Printing designs a barrier-free digital experience that meets WCAG 2.1 AA guidelines, our ongoing accessibility roadmap, and how you can request assistance or provide feedback.",
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
    datePublished: "2024-01-01", // Update as appropriate
    dateModified: "2025-05-24", // Update dynamically if possible
    image: [
      "https://www.mseprinting.com/images/common-images/accessibility_statement.webp",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

/* — Page blocks — */
const TitleBlock: React.FC<{ data: TitleContentTypes }> = ({ data }) => {
  if (!data?.title) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">{data.title}</h2>

      {data.contentUp?.map((p, i) => (
        <p key={`up-${i}`} className="mb-4 leading-relaxed">
          {p}
        </p>
      ))}

      {data.content && (
        <ul className="list-disc list-inside space-y-2">
          {data.content.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}

      {data.contentDown?.map((p, i) => (
        <p key={`down-${i}`} className="mt-4 leading-relaxed">
          {p}
        </p>
      ))}
    </section>
  );
};

const SectionBlock: React.FC<{ data: SectionContent }> = ({ data }) => (
  <section className="mt-12">
    <h2 className="text-2xl font-semibold mb-4">{data.heading}</h2>

    {data.paragraph1 && (
      <p className="mb-4 leading-relaxed">{data.paragraph1}</p>
    )}
    {data.paragraph2 && (
      <p className="mb-4 leading-relaxed">{data.paragraph2}</p>
    )}

    {data.list && (
      <ul className="list-disc list-inside space-y-2">
        {data.list.map((item) => {
          const isEmail = item.content?.includes("@");
          const isPhone =
            item.content && item.content.replace(/\s+/g, "").match(/^\d{9,}$/);

          return (
            <li key={item.id}>
              <strong>{item.page}</strong>{" "}
              {isEmail ? (
                <a
                  href={`mailto:${item.content}`}
                  className="font-semibold text-blue-600"
                >
                  {item.content}
                </a>
              ) : isPhone ? (
                <a
                  href={`tel:${item.content?.replace(/\D/g, "")}`}
                  className="font-semibold text-blue-600"
                >
                  {item.content}
                </a>
              ) : (
                item.content
              )}
            </li>
          );
        })}
      </ul>
    )}
  </section>
);

export default async function Accessibility() {
  const data = await getSpecialPagesData("/accessibility");
  const pageData = data.accessibilityData?.[0];

  if (!pageData) {
    return (
      <main className="max-w-[1200px] mx-auto text-center py-24">
        <h1 className="text-4xl font-bold">Accessibility Statement</h1>
        <p className="mt-6">
          Content is being prepared. Please check back soon.
        </p>
      </main>
    );
  }

  const { first, second, third, fourth, fifth, sixth, seventh } = pageData;

  return (
    <main className="screen-size-15:text-left text-center mx-auto max-w-[800px] px-8">
      <ArticleSchema />
      <div>
        <h1 className="text-4xl font-bold my-10">{first}</h1>

        <TitleBlock data={second} />
        <TitleBlock data={third} />
        <SectionBlock data={fourth} />
        <SectionBlock data={fifth} />
        <SectionBlock data={sixth} />
        <TitleBlock data={seventh} />
      </div>
    </main>
  );
}
