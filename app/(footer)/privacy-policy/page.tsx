import React from "react";
import type {
  TitleContentTypes,
  SectionContent,
  privacyPolicyTypes,
} from "../../../types/commonTypes";
import { getSpecialPagesData } from "db/GetSpecialPagesData";

/* — SEO metadata as per your page standards — */
export const metadata = {
  title: "Privacy Policy | MSE Printing",
  description:
    "Read how MSE Printing collects, uses, and protects your personal information in accordance with the CCPA and other privacy regulations.",
  keywords: [
    "privacy policy",
    "personal information protection",
    "CCPA compliance",
    "data security",
    "information privacy",
    "user data rights",
    "MSE Printing privacy",
    "customer data policy",
    "information usage",
    "privacy regulations",
  ],
  applicationName: "MSE Printing",
  category: "Privacy Policy",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: { canonical: "https://www.mseprinting.com/privacy-policy" },
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
    google: "ABCD1234xyz", // Replace with your Search Console code
  },
  openGraph: {
    title: "Privacy Policy | MSE Printing",
    description:
      "Learn how MSE Printing safeguards your data, your rights under the CCPA, and how you can contact us to manage your information.",
    url: "https://www.mseprinting.com/privacy-policy",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.mseprinting.com/images/footer-images/privacy_policy.webp",
        width: 800,
        height: 630,
        alt: "MSE Printing Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | MSE Printing",
    description:
      "Learn how MSE Printing safeguards your data and protects your privacy rights.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/footer-images/privacy_policy.webp",
        alt: "MSE Printing Privacy Policy Statement",
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
} as const;

/* — Schema.org Article structured data for Privacy Policy — */
const ArticleSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://www.mseprinting.com/privacy-policy#privacy",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mseprinting.com/privacy-policy",
    },
    headline: "Privacy Policy",
    description:
      "Read how MSE Printing collects, uses, and protects your personal information in accordance with the CCPA and other privacy regulations.",
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
      "https://www.mseprinting.com/images/footer-images/privacy_policy.webp",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

const TitleBlock: React.FC<{ data: TitleContentTypes }> = ({ data }) =>
  !data.title ? null : (
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

const SectionBlock: React.FC<{ data: SectionContent }> = ({ data }) => (
  <section className="mt-12 ">
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
          const isPhone = item.content?.replace(/\s+/g, "").match(/^\d{9,}$/);

          const pagePart = item.page ? <span>{item.page}</span> : null;
          const pathPart = item.path ? <strong>{item.path}</strong> : null;

          const renderedContent = isEmail ? (
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
            <span>{item.content}</span>
          );

          return (
            <li key={item.id}>
              {pagePart}
              {pathPart}
              {pagePart || pathPart ? " " : null}
              {renderedContent}
            </li>
          );
        })}
      </ul>
    )}
  </section>
);

/* ---------- Page Component ---------- */
export default async function PrivacyPolicy() {
  /** 1. Fetch data for this path */
  const { privacyPolicyData = [] } =
    await getSpecialPagesData("/privacy-policy");

  /** 2. Take the first (and only) row */
  const policyRow = privacyPolicyData[0] as privacyPolicyTypes | undefined;

  if (!policyRow) {
    console.warn(
      "privacy_policy_page table returned no rows — seed the data in Neon."
    );
    return (
      <main className="max-w-xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-red-600">
          Privacy‑policy content is not yet available.
        </p>
      </main>
    );
  }

  /** 3. Destructure and render */
  const { first, second, third, fourth, fifth, sixth, seventh } = policyRow;

  return (
    <main className="mx-auto max-w-[800px] screen-size-15:text-left text-center px-8">
      <ArticleSchema />
      <h1 className="text-4xl font-bold text-center my-10">{first}</h1>

      <TitleBlock data={second} />
      <SectionBlock data={third} />
      <SectionBlock data={fourth} />
      <SectionBlock data={fifth} />
      <SectionBlock data={sixth} />
      <TitleBlock data={seventh} />
    </main>
  );
}
