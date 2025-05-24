import React from "react";
import Link from "next/link";
import { getSpecialPagesData } from "db/GetSpecialPagesData";
import type {
  termsConditionsTypes,
  termsSection,
} from "../../../types/commonTypes";

/* ---------- SEO metadata ---------- */
export const metadata = {
  title: "Terms & Conditions | MSE Printing",
  description:
    "Read the terms and conditions that govern your use of the MSE Printing website, including limitations of liability, copyright, and dispute resolution.",
  keywords: [
    "terms and conditions",
    "website use terms",
    "user agreement",
    "copyright policy",
    "dispute resolution",
    "privacy rights",
    "legal terms",
    "liability limitations",
    "MSE Printing terms",
    "user responsibilities",
  ],
  applicationName: "MSE Printing",
  category: "Terms & Conditions",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: { canonical: "https://www.mseprinting.com/terms-conditions" },
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
    title: "Terms & Conditions | MSE Printing",
    description:
      "Review the legal terms that apply to visitors of the MSE Printing website, our franchise relationships, and your privacy rights.",
    url: "https://www.mseprinting.com/terms-conditions",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.mseprinting.com/images/footer-images/terms_conditions.webp",
        width: 1200,
        height: 630,
        alt: "MSE Printing Terms & Conditions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | MSE Printing",
    description:
      "Review the legal terms that apply to visitors of the MSE Printing website.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/terms_conditions.webp",
        alt: "Terms and Conditions by MSE Printing",
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

/* — Schema.org Article structured data for Terms & Conditions — */
const ArticleSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://www.mseprinting.com/terms-conditions#terms",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mseprinting.com/terms-conditions",
    },
    headline: "Terms & Conditions",
    description:
      "Read the terms and conditions that govern your use of the MSE Printing website, including limitations of liability, copyright, and dispute resolution.",
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
      "https://www.mseprinting.com/images/common-images/terms_conditions.webp",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

/* ---------- helper to inject links ---------- */
function paragraphToNode(text: string, key: React.Key) {
  if (text.includes("MSE Printing website")) {
    return (
      <p key={key} className="mb-4">
        Welcome to the{" "}
        <Link href="/" className="font-semibold text-blue-600">
          MSE Printing website
        </Link>
        , accessible at <strong>www.mseprinting.com</strong> and the related
        pages of our MSE Printing locations. In these terms and conditions,
        “you,” “your,” or “user” refers to the person using the site.
      </p>
    );
  }
  if (text.includes("Privacy Policy")) {
    return (
      <p key={key} className="mb-4">
        Please see our{" "}
        <Link href="/privacy-policy" className="font-semibold text-blue-600">
          privacy policy
        </Link>{" "}
        for information on how we collect, use, and protect your personal
        information.
      </p>
    );
  }
  return (
    <p key={key} className="mb-4">
      {text}
    </p>
  );
}

/* ---------- page component ---------- */
export default async function TermsConditions() {
  const { termsConditionsData = [] } =
    await getSpecialPagesData("/terms-conditions");
  const row = termsConditionsData[0] as termsConditionsTypes | undefined;

  if (!row) {
    return (
      <main className="max-w-xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
        <p>Content is not yet available.</p>
      </main>
    );
  }

  const { title, intro, sections } = row;

  return (
    <>
      <ArticleSchema />
      <main className="mx-auto max-w-[800px] px-8 text-center lg:text-left">
        <h1 className="text-4xl font-bold my-10">{title}</h1>

        {/* intro */}
        {intro.map((t, i) => paragraphToNode(t, `intro-${i}`))}

        {/* sections */}
        {sections.map(({ id, heading, paragraphs }: termsSection) => (
          <section key={`sec-${id}`} className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">
              {id}. {heading}
            </h2>
            {paragraphs.map((t, i) => paragraphToNode(t, `p-${id}-${i}`))}
          </section>
        ))}

        <p className="my-12">
          By using this site, you acknowledge that you have read, understood,
          and agree to be bound by these terms and conditions.
        </p>
      </main>
    </>
  );
}
