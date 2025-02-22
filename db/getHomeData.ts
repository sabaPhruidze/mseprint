import { getDataPattern } from "../lib/supabaseClient";
import { SEOImageProps } from "../types/commonTypes";
import { TitleContentTypes } from "../types/commonTypes";


export const getHomeData = async (pathname: string = "/") => {
  
  if (pathname !== "/") {
    return { carouselData: [], cardsData: [], specialitiesData:{}};
  }

  try {
    const [carouselData, cardsData,specialitiesData] = await Promise.all([
      getDataPattern<SEOImageProps>("home_carousel"),
      getDataPattern<SEOImageProps>("home_cards"),
      getDataPattern<TitleContentTypes>("home_specialities"),
    ]);

    return {
      carouselData: carouselData ?? [],
      cardsData: cardsData ?? [],
      specialitiesData: specialitiesData ?? {},
    };
  } catch (error) {
    return {
      carouselData: [],
      cardsData: [],
      specialitiesData: {},
    };
  }
};
