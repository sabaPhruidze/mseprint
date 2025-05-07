import { getDataPattern } from "../lib/supabaseClient";
import { accessibilityTypes} from "../types/commonTypes";

export const getSpecialPagesData = async (pathname: string) => {
  try {
    switch (pathname) {
        case "/accessibility": {
            const [accessibilityData] = await Promise.all([
              getDataPattern<accessibilityTypes>("accessibility_page"),
            ]);
          
            return {
              accessibilityData: accessibilityData ?? [],
            };
          }   
      default:
        return {};
    }
    
  } catch (error) {
    console.error("Error fetching category pages data:", error);
    return {};
  }
};