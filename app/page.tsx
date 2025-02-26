import Carousel from "../components/Home/Carousel";
import { getHomeData } from "../db/getHomeData";
import Head from "next/head";
import Cards from "components/Home/Cards";
import { getHeaderData } from "../db/getHeaderData";
import HeroSection from "components/Home/HeroSection";
import CTASection from "components/Home/CTASection";

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
