import type { Metadata } from "next";
import React from "react";
import RequestQuoteForm from "components/RQSF/RQ/RequestQuoteForm";
import { getRQSFData } from "db/getRQSFContent";
import RQContentTop from "components/RQSF/RQ/RQContentTop";
import RQContentBottom from "components/RQSF/RQ/RQContentBottom";
import { getCurrentUser } from "lib/getCurrentUser";

/* — SEO Metadata matching your site standards — */
export const metadata: Metadata = {
  title: "Request a Quote | MSE Printing",
  description:
    "Submit a quote request for custom printing and marketing services with MSE Printing. Our team will provide a tailored solution for your business needs.",
  keywords: [
    "printing quote",
    "custom print estimate",
    "request a quote",
    "MSE Printing quote",
    "business print pricing",
    "custom marketing materials",
    "get a print estimate",
    "online print quote",
    "order printing",
    "Minneapolis print quote",
  ],
  applicationName: "MSE Printing",
  category: "Request a Quote",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: { canonical: "https://www.mseprinting.com/request-quote" },
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
    title: "Request a Quote | MSE Printing",
    description:
      "Start your custom printing project with a fast, free quote from MSE Printing. Serving Minneapolis & nationwide.",
    url: "https://www.mseprinting.com/request-quote",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/header-images/request_quote.webp",
        width: 800,
        height: 630,
        alt: "Request a Quote - MSE Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Quote | MSE Printing",
    description:
      "Submit a quote request for custom printing and marketing services with MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/header-images/request_quote.webp",
        alt: "Request a Quote - MSE Printing",
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

/* --- Schema.org WebPage structured data --- */
const WebPageSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.mseprinting.com/request-quote#webpage",
    url: "https://www.mseprinting.com/request-quote",
    name: "Request a Quote",
    description:
      "Request a custom quote for printing or marketing services from MSE Printing. Fast, expert Minneapolis print estimates.",
    publisher: {
      "@type": "Organization",
      name: "MSE Printing",
      url: "https://www.mseprinting.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mseprinting.com/favicon.ico",
      },
    },
    inLanguage: "en-US",
    datePublished: "2024-01-01", // Update as appropriate
    dateModified: "2025-05-24", // Update dynamically if possible
    image: [
      "https://www.mseprinting.com/images/header-images/request_quote.webp",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

/* --- Page component --- */
export default async function RequestQuotePage() {
  const { requestQuoteContent } = await getRQSFData("/request-quote");
  const userDefaults = await getCurrentUser();

  return (
    <main className="bg-gray-50 dark:bg-black screen-size-6:p-10 p-0">
      <WebPageSchema />
      <RQContentTop data={requestQuoteContent} />
      <RequestQuoteForm userDefaults={userDefaults ?? undefined} />
      <RQContentBottom data={requestQuoteContent} />
    </main>
  );
}
