import Carousel from "../components/Home/Carousel";
import { SEOImageProps } from "../types/commonTypes";
import { getHomeData } from "../db/getHomeData";
import Head from "next/head";
import Cards from "components/Home/Cards";

const Home = async () => {
  const data = await getHomeData("/");

  return (
    <>
      <Head>
        <title>Best Printing Services | MSE Print</title>
        <meta
          name="description"
          content="Top-quality commercial printing, digital printing, signs, and mailing solutions. Stand out with MSE Print!"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <div>
        <Carousel carouselData={data.carouselData} />
        <Cards cardsData={data.cardsData} />
        <h1 className="text-mediumBlue">Hello, this is a light gray heading</h1>
        <p className="font-inter-bold">saba</p>
        <p className="font-inter-light">saba</p>
        <p className="font-inter-extralight">saba</p>
      </div>
    </>
  );
};

export default Home;
