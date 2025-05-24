import type { Metadata } from "next";
import React from "react";
import { getRQSFData } from "db/getRQSFContent";
import SFContentTop from "components/RQSF/SF/SFContentTop";
import SFContentBottom from "components/RQSF/SF/SFContentBottom";
import SendFileForm from "components/RQSF/SF/SendFileForm";
import { getCurrentUser } from "lib/getCurrentUser";

/* — SEO Metadata matching your site standards — */
export const metadata: Metadata = {
  title: "Place an Order | MSE Printing",
  description:
    "Upload production-ready files and place your printing order with MSE Printing. Our team will review the artwork and provide confirmation.",
  keywords: [
    "place an order",
    "send files",
    "upload print files",
    "order printing",
    "file upload",
    "MSE Printing order",
    "print production",
    "submit artwork",
    "file transfer",
    "Minneapolis print order",
  ],
  applicationName: "MSE Printing",
  category: "Place an Order",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: { canonical: "https://www.mseprinting.com/send-file" },
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
    title: "Place an Order | MSE Printing",
    description:
      "Upload your production files and place a print order with MSE Printing. Fast, secure, and reliable.",
    url: "https://www.mseprinting.com/send-file",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/header-images/send_file.webp",
        width: 1200,
        height: 630,
        alt: "Place an Order - MSE Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Place an Order | MSE Printing",
    description:
      "Upload production-ready files and place your printing order with MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/send_file.webp",
        alt: "Place an Order - MSE Printing",
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

/* --- Schema.org WebPage structured data --- */
const WebPageSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.mseprinting.com/send-file#webpage",
    url: "https://www.mseprinting.com/send-file",
    name: "Place an Order",
    description:
      "Upload production-ready files and place your printing order with MSE Printing. Our team will review your artwork and confirm your order promptly.",
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
    image: ["https://www.mseprinting.com/images/common-images/send_file.webp"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

/* --- Page component --- */
export default async function SendAFile() {
  const { sendFileContent } = await getRQSFData("/send-file");
  const userDefaults = await getCurrentUser();
  return (
    <main className="bg-gray-50 screen-size-6:p-10 p-0">
      <WebPageSchema />
      <SFContentTop data={sendFileContent} />
      <SendFileForm userDefaults={userDefaults ?? undefined} />
      <SFContentBottom data={sendFileContent} />
    </main>
  );
}
