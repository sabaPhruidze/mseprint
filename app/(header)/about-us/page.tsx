// app/about-us/page.tsx

import React, { ElementType } from "react";
import type { Metadata } from "next";
import { getSpecialPagesData } from "db/GetSpecialPagesData";
import { AboutUsSection } from "types/commonTypes";
import ContactUs from "components/common/ContactUs";

/* ---------- SEO Metadata (all fields as per site standard) ---------- */
export const metadata: Metadata = {
  title: "About Us | MSE Printing",
  description:
    "Meet Minneapolis’ trusted printing partner since 1985—MSE Printing provides expert print, signage, and marketing solutions with fast, friendly service.",
  keywords: [
    "about MSE Printing",
    "printing company Minneapolis",
    "local print shop",
    "signage experts",
    "company history",
    "our team",
    "customer service",
    "minneapolis printing",
    "meet the team",
    "why choose MSE Printing",
  ],
  applicationName: "MSE Printing",
  category: "About Us",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: { canonical: "https://www.mseprinting.com/about-us" },
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
    url: "https://www.mseprinting.com/about-us",
    title: "About Us | MSE Printing",
    description:
      "Minneapolis’ trusted printing partner since 1985—MSE Printing delivers expert print, signage, and marketing solutions with personalized service.",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/header-images/about_us.webp",
        width: 800,
        height: 630,
        alt: "Inside MSE Printing’s production floor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | MSE Printing",
    description:
      "Learn about MSE Printing’s history, values, and commitment to Minneapolis businesses since 1985.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/header-images/about_us.webp",
        alt: "MSE Printing Production Team",
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

/* ---------- Schema.org Organization Structured Data ---------- */
const OrganizationSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.mseprinting.com/#organization",
    name: "MSE Printing",
    url: "https://www.mseprinting.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.mseprinting.com/favicon.ico",
    },
    description:
      "MSE Printing has provided professional printing, signage, and marketing services in Minneapolis since 1985.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3839 N Washington Ave Ste. 101",
      addressLocality: "Minneapolis",
      addressRegion: "MN",
      postalCode: "55412",
      addressCountry: "US",
    },
    telephone: "763-542-8812",
    email: "info@mseprinting.com",
    sameAs: [
      "https://www.facebook.com/mseprinting",
      "https://www.linkedin.com/company/mseprinting",
    ],
    foundingDate: "1985",
    image: ["https://www.mseprinting.com/images/header-images/about_us.webp"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default async function AboutUsPage() {
  const { aboutUsData: raw } = await getSpecialPagesData("/about-us");

  const aboutUsData: AboutUsSection[] = Array.isArray(raw)
    ? (raw as AboutUsSection[][]).flat()
    : [];

  const renderSection = (section: AboutUsSection) => {
    const HeadingTag = `h${section.heading_level + 1}` as ElementType;

    switch (section.type) {
      case "paragraph":
        return (
          <section key={section.id} className="space-y-4">
            <HeadingTag className="text-2xl font-bold text-gray-900 dark:text-white">
              {section.title}
            </HeadingTag>
            <p className="text-lg leading-relaxed dark:text-gray-300">
              {section.content.text}
            </p>
          </section>
        );
      case "list":
        return (
          <section key={section.id} className="space-y-4">
            <HeadingTag className="text-2xl font-bold text-gray-900 dark:text-white">
              {section.title}
            </HeadingTag>
            <ul className="list-disc space-y-2 pl-5 text-lg leading-relaxed dark:text-white">
              {section.content.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        );
      case "subsections":
        return (
          <section key={section.id} className="space-y-12">
            <HeadingTag className="text-2xl font-bold text-gray-900 dark:text-white">
              {section.title}
            </HeadingTag>
            {section.content.items.map(({ title, text }) => (
              <div key={title} className="space-y-2">
                <h3 className="text-2xl font-semibold leading-relaxed dark:text-white">
                  {title}
                </h3>
                <p className="text-lg leading-relaxed dark:text-white">
                  {text}
                </p>
              </div>
            ))}
          </section>
        );
    }
  };

  return (
    <div>
      <OrganizationSchema />
      <main className="mx-auto max-w-6xl space-y-16 px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-200">
          About MSE Printing
        </h1>
        {aboutUsData.map(renderSection)}
      </main>
      <ContactUs />
    </div>
  );
}
