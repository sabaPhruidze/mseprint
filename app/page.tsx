// app/page.tsx
import type { Metadata } from "next";
import dynamic from "next/dynamic";

import Carousel from "components/Home/Carousel";
import Cards from "components/Home/Cards"; // ← eager
import { getHomeData } from "db/getHomeData";
import { getHeaderData } from "db/getHeaderData";

// lazily load heavy, non-critical components (Cards stays eager)
const HeroSection = dynamic(
  () => import("components/Home/HeroSection"),
  { ssr: true } // keeps full SEO
);
const CTASection = dynamic(() => import("components/Home/CTASection"), {
  ssr: true,
});

export const runtime = "edge";
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
        width: 1200,
        height: 630,
        alt: "MSE Printing Services",
      },
    ],
  },
};

export default async function Home() {
  // Home data + small slice of header data for the CTA
  const [homeData, headerData] = await Promise.all([
    getHomeData("/"),
    getHeaderData(),
  ]);

  return (
    <div>
      <Carousel carouselData={homeData.carouselData} />

      <div className="flex flex-col lg:flex-row gap-6 py-6">
        <Cards
          cardsData={homeData.cardsData}
          homeSpecialities={homeData.homeSpecialities}
        />
      </div>

      <HeroSection heroSection={homeData.heroSection} />

      <CTASection rqsafData={headerData.requestQuoteSendAFileData} />
    </div>
  );
}
