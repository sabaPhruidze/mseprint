import Carousel from "../components/Home/Carousel";
import type { Metadata } from "next";
import { getHomeData } from "../db/getHomeData";
import Head from "next/head";
import Cards from "components/Home/Cards";
import { getHeaderData } from "../db/getHeaderData";
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
  const data = await getHomeData("/");
  const headerData = await getHeaderData();
  return (
    <>
      <Head>
        <title>Best Printing Services | MSE Print</title>
        <meta
          name="description"
          content="Top-quality commercial printing, digital printing, signs, and mailing solutions. Stand out with MSE Print!"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.mseprinting.com/" />
      </Head>
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
        {/* <h1 className="text-mediumBlue">Hello, this is a light gray heading</h1>
        <p className="font-inter-bold">saba</p>
        <p className="font-inter-light">saba</p>
        <p className="font-inter-extralight">saba</p> */}
      </div>
    </>
  );
};

export default Home;
