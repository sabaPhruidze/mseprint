import { getDataPattern } from "../lib/supabaseClient";
import { SEOImageProps } from "../types/commonTypes";

export const getHomeData = async (pathname: string = "/") => {
  if (pathname !== "/") {
    return { carouselData: [] };
  }

  try {
    
    const carouselData = await getDataPattern<SEOImageProps>("home_carousel");
    return { carouselData };
  } catch (error) {
    return { carouselData: [] };
  }
};