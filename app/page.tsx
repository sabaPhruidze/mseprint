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
  metadataBase: new URL("https://www.mseprinting.com"),
  openGraph: {
    title: "MSE Printing | Commercial Printing & Direct Mail Services",
    description:
      "Full-service commercial printing company offering offset printing, digital printing, direct mail services, and custom online ordering portals for businesses.",
    url: "https://www.mseprinting.com",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/main-page-images/offset-printing.webp",
        width: 1920,
        height: 400,
        alt: "MSE Printing Services",
      },
    ],
  },
};

export default async function Home() {
  const [homeData, headerData] = await Promise.all([
    getHomeData("/"),
    getHeaderData(),
  ]);

  return (
    <div>
      {/* Critical above-the-fold content */}
      <Carousel carouselData={homeData.carouselData} />

      {/* Cards - Hidden on mobile via CSS, no JS needed */}
      <div className="hidden md:block">
        <Cards
          cardsData={homeData.cardsData}
          homeSpecialities={homeData.homeSpecialities}
        />
      </div>

      {/* Below-the-fold content with Suspense for streaming */}
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

// Separate component for below-the-fold content
async function BelowFoldContent({ heroSection, rqsafData }: any) {
  // This will be streamed after the above-the-fold content
  return (
    <>
      <HeroSection heroSection={heroSection} />
      <CTASection rqsafData={rqsafData} />
    </>
  );
}
