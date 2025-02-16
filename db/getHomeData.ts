import { getDataPattern } from "@/lib/supabaseClient";
import { carouselTypes } from "@/types/Home/homeTypes";

export const getHomeData = async (pathname: string = "/") => {
  if (pathname !== "/") {
    return { carouselData: [] };
  }

  try {
    
    const carouselData = await getDataPattern<carouselTypes>("home_carousel");
    return { carouselData };
  } catch (error) {
    return { carouselData: [] };
  }
};