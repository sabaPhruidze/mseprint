import type { Metadata } from "next";
import { Suspense } from "react";
import Carousel from "components/Home/Carousel";
import Cards from "components/Home/Cards";
import HeroSection from "components/Home/HeroSection";
import CTASection from "components/Home/CTASection";
import { getHomeData } from "db/getHomeData";
import { getHeaderData } from "db/getHeaderData";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "MSE Printing | Commercial Printing & Direct Mail Services",
  description:
    "Professional commercial printing services including offset printing, digital printing, direct mail, signs, and custom online ordering portals. Quality printing solutions for businesses.",

  alternates: { canonical: "https://www.mseprinting.com/" },
  metadataBase: new URL("https://www.mseprinting.com/"),
  openGraph: {
    title: "MSE Printing | Commercial Printing & Direct Mail Services",
    description:
      "Full-service commercial printing company offering offset printing, digital printing, direct mail services, and custom online ordering portals for businesses.",

    url: "https://www.mseprinting.com/",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/home-images/offset_printing.webp",
        width: 1920,
        height: 400,
        alt: "MSE Printing Services",
      },
    ],
  },
};

import { SEOImageProps, PagePathTypes } from "../types/commonTypes";

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
