import type { Metadata } from "next";
import { Suspense } from "react";
import Carousel from "components/Home/Carousel";
import Cards from "components/Home/Cards";
import HeroSection from "components/Home/HeroSection";
import CTASection from "components/Home/CTASection";
import { getHomeData } from "db/getHomeData";
import { getHeaderData } from "db/getHeaderData";

export const revalidate = 3600;

import { SEOImageProps, PagePathTypes } from "../types/commonTypes";

export const metadata: Metadata = {
  title: "Printing Company in Minneapolis | MSE Printing",
  description:
    "MSE Printing is a Minneapolis commercial printer offering offset & digital printing, direct mail, signage and fast local delivery throughout the Twin Cities.",
  alternates: { canonical: "https://www.mseprinting.com/" },
  metadataBase: new URL("https://www.mseprinting.com/"),
  keywords: [
    "printing company Minneapolis",
    "commercial printing Minneapolis",
    "direct mail Minneapolis",
    "digital printing Twin Cities",
  ],
  openGraph: {
    title: "Printing Company in Minneapolis | MSE Printing",
    description:
      "Full‑service Minneapolis printing company providing offset, digital, mail & sign solutions for businesses.",
    url: "https://www.mseprinting.com/",
    siteName: "MSE Printing",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/offset_printing.webp",
        width: 1920,
        height: 400,
        alt: "Offset press inside MSE Printing, Minneapolis",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Printing Company in Minneapolis | MSE Printing",
    description:
      "Local Minneapolis printer for offset, digital, direct mail and signage projects.",
    images: [
      "https://www.mseprinting.com/images/home-images/offset_printing.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "US-MN",
    "geo.placename": "Minneapolis",
    "geo.position": "44.9778;-93.2650",
    ICBM: "44.9778, -93.2650",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "PrintShop",
  "@id": "https://www.mseprinting.com/#organization",
  name: "MSE Printing",
  description:
    "Commercial printing company in Minneapolis, MN specializing in offset printing, digital printing, direct mail and signage.",
  url: "https://www.mseprinting.com/",
  telephone: "+1-763-542-8812", // <- replace if different
  address: {
    "@type": "PostalAddress",
    streetAddress: "YOUR STREET ADDRESS", // <- replace
    addressLocality: "Minneapolis",
    addressRegion: "MN",
    postalCode: "YOUR ZIP", // <- replace
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.9778,
    longitude: -93.265,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/mseprinting",
    "https://www.linkedin.com/company/mseprinting",
  ],
};

/* ------------------------------------------------------------------
   Types
   ------------------------------------------------------------------ */
interface BelowFoldContentProps {
  heroSection: SEOImageProps | null;
  rqsafData: PagePathTypes[];
}
export default async function Home() {
  const [homeData, headerData] = await Promise.all([
    getHomeData("/"),
    getHeaderData(),
  ]);

  return (
    <div>
      <script
        type="application/ld+json"
        // stringified to avoid hydration mismatch
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <Carousel carouselData={homeData.carouselData} />
      <Cards
        cardsData={homeData.cardsData}
        homeSpecialities={homeData.homeSpecialities}
      />

      <Suspense
        fallback={
          <div className="min-h-[200px] flex items-center justify-center">
            <div className="text-gray-500">Loading...</div>
          </div>
        }
      >
        <BelowFoldContent
          heroSection={homeData.heroSection}
          rqsafData={headerData.requestQuoteSendAFileData}
        />
      </Suspense>
    </div>
  );
}

async function BelowFoldContent({
  heroSection,
  rqsafData,
}: BelowFoldContentProps) {
  return (
    <>
      <HeroSection heroSection={heroSection} />
      <CTASection rqsafData={rqsafData} />
    </>
  );
}
