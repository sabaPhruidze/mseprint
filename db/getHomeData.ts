import { getDataPattern } from "../lib/supabaseClient";
import { SEOImageProps } from "../types/commonTypes";
import { TitleContentTypes } from "../types/commonTypes";
import { cache } from "react";

export const getHomeData = cache(async (pathname: string = "/") => {
  if (pathname !== "/") {
    return { heroSection: null, carouselData: [], cardsData: [], homeSpecialities: [] };
  }

  try {
    const [heroSection, carouselData, cardsData, homeSpecialities] = await Promise.all([
      getDataPattern<SEOImageProps>("home_hero_section"),
      getDataPattern<SEOImageProps>("home_carousel"),
      getDataPattern<SEOImageProps>("home_cards"),
      getDataPattern<TitleContentTypes>("home_specialities"),
    ]);

    return {
      heroSection: heroSection?.[0] || null,
      carouselData: carouselData ?? [],
      cardsData: cardsData ?? [],
      homeSpecialities: homeSpecialities ?? [],
    };
  } catch (error) {
    console.error("Error fetching home data:", error);
    return {
      heroSection: null,
      carouselData: [],
      cardsData: [],
      homeSpecialities: [],
    };
  }
});
