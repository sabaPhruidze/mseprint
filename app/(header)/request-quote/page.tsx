import type { Metadata } from "next";
import React from "react";
import RequestQuoteForm from "components/RQSF/RQ/RequestQuoteForm";
import { getRQSFData } from "db/getRQSFContent";
import RQContentTop from "components/RQSF/RQ/RQContentTop";
import RQContentBottom from "components/RQSF/RQ/RQContentBottom";
import { getCurrentUser } from "lib/getCurrentUser";

/* — SEO Metadata matching your site standards — */
export const metadata: Metadata = {
  title: "Request a Quote (Free Estimate) | MSE Printing, Minneapolis MN",
  description:
    "Get a fast, free printing quote—signs, direct mail/EDDM, labels, packaging, large format & more. Local Minneapolis, MN service with nationwide delivery.",
  keywords: [
    // CORE
    "printing quote",
    "print estimate",
    "request a quote",
    "online print quote",
    "Minneapolis print quote",
    "print pricing Minneapolis",
    "printing estimate MN",
    "rush print quote",

    // HIGH-INTENT SERVICE CLUSTERS
    "signs and graphics quote",
    "banner printing quote",
    "window wall floor graphics quote",
    "vehicle wraps quote Minneapolis",
    "exterior signage quote Minneapolis",
    "ADA signs quote Minneapolis",

    // DIRECT MAIL
    "EDDM quote",
    "every door direct mail quote",
    "direct mail printing quote",
    "mailing services estimate",

    // PRINT PRODUCTS
    "business cards quote Minneapolis",
    "postcards printing quote",
    "poster printing quote",
    "brochure printing quote",
    "annual report printing quote",
    "legal printing quote Minneapolis",

    // LABELS & PACKAGING
    "labels printing quote",
    "sticker printing quote",
    "custom decals quote",
    "short run packaging quote",
    "custom boxes quote",

    // NEAR-ME VARIANTS
    "printing quote near me",
    "custom print estimate near me",
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
    name: "Request a Quote (Free Estimate)",
    description:
      "Fast, free printing estimates for signs, direct mail/EDDM, labels, packaging, large format, and marketing materials. Minneapolis, MN & nationwide.",
    datePublished: "2024-01-01",
    dateModified: "2025-09-26",
    about: [
      "printing quote",
      "direct mail EDDM quote",
      "signs and graphics quote",
      "labels and stickers quote",
      "short-run packaging quote",
      "vehicle wraps quote",
      "large format printing quote",
      "business cards and brochures quote",
      "annual report printing quote",
      "legal printing quote",
    ],
    potentialAction: {
      "@type": "Action",
      name: "Submit Quote Request",
      target: "https://www.mseprinting.com/request-quote",
    },
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
