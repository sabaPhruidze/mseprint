"use client";

import { useEffect, useState } from "react";
import Carousel from "@/components/Home/Carousel";
import { carouselTypes } from "@/types/Home/homeTypes";
import { getHomeData } from "@/db/getHomeData";
import { usePathname } from "next/navigation";
import Head from "next/head";
const Home: React.FC = () => {
  const [carouselData, setCarouselData] = useState<carouselTypes[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHomeData("/");
      setCarouselData(data.carouselData);
    };
    fetchData();
  }, []);

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
        <Carousel carouselData={carouselData} pathname={pathname} />{" "}
        <h1 className="text-mediumBlue">Hello, this is a light gray heading</h1>
        <p className="font-inter-bold">saba</p>
        <p className="font-inter-light">saba</p>
        <p className="font-inter-extralight">saba</p>
      </div>
    </>
  );
};

export default Home;
