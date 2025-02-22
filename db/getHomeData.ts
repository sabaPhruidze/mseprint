import { getDataPattern } from "../lib/supabaseClient";
import { SEOImageProps } from "../types/commonTypes";
import { TitleContentTypes } from "../types/commonTypes";

export const getHomeData = async (pathname: string = "/") => {
  if (pathname !== "/") {
    return { carouselData: [], cardsData: [], homeSpecialities:[]};
  }

  try {
    const [carouselData, cardsData, homeSpecialities] = await Promise.all([
      getDataPattern<SEOImageProps>("home_carousel"),
      getDataPattern<SEOImageProps>("home_cards"),
      getDataPattern<TitleContentTypes>("home_specialities"), 
    ]);

    return {
      carouselData: carouselData ?? [],
      cardsData: cardsData ?? [],
      homeSpecialities: homeSpecialities ?? [], 
    };
  } catch (error) {
    return {
      carouselData: [],
      cardsData: [],
      homeSpecialities: [],
    };
  }
};
