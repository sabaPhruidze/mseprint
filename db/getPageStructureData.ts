import { getDataPattern } from "../lib/supabaseClient";
import { PageStructureTypes } from "../types/commonTypes";
export const getPageStructureData = async () => {
  try {
    const [CommercialOffsetPrintingPageData] = await Promise.all([
      getDataPattern<PageStructureTypes>("commercial_offset_printing_page"),
      
    ]);
    return {
      CommercialOffsetPrintingPageData:CommercialOffsetPrintingPageData ?? [],
    };
  } catch (error) {
    console.error("Error fetching footer data:", error);
    return {
      CommercialOffsetPrintingPageData:[],
    };
  }
};
