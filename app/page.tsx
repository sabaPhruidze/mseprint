import Carousel from "../components/Home/Carousel";
import type { Metadata } from "next";
import { getHomeData } from "../db/getHomeData";
import { getHeaderData } from "../db/getHeaderData";
import Cards from "components/Home/Cards";
import HeroSection from "components/Home/HeroSection";
import CTASection from "components/Home/CTASection";

export const metadata: Metadata = {
  title: "MSE Printing | Commercial Printing & Direct Mail Services",
  description:
    "Professional commercial printing services including offset printing, digital printing, direct mail, signs, and custom online ordering portals. Quality printing solutions for businesses.",
  alternates: {
    canonical: "https://www.mseprinting.com/",
  },
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

const Home = async () => {
  const [data, headerData] = await Promise.all([
    getHomeData("/"),
    getHeaderData(),
  ]);

  return (
    <>
      <div>
        <Carousel carouselData={data.carouselData} />
        <div className="flex flex-col lg:flex-row gap-6 p-4">
          <Cards
            cardsData={data.cardsData}
            homeSpecialities={data.homeSpecialities}
          />
        </div>

        <HeroSection heroSection={data.heroSection} />
        <CTASection rqsafData={headerData.requestQuoteSendAFileData} />
      </div>
    </>
  );
};

export default Home;
