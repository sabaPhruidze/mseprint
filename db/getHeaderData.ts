import { getDataPattern } from "@/lib/supabaseClient";
import { HeaderMenuTypes,headerEffectiveTextTypes } from "@/types/Header/HeaderTypes";

export const getHeaderMenuData = async () => {
  try {
    return await getDataPattern<HeaderMenuTypes>("header_menu");
  } catch (error) {
    console.error("Error fetching header menu data:", error);
    return []; 
  }
};
export const getHeaderEffectiveTextData = async () => {
  try {
    return await getDataPattern<headerEffectiveTextTypes>("header_effective_text");
  } catch (error) {
    console.error("Error fetching header menu data:", error);
    return []; 
  }
};