import { getDataPattern } from "../lib/supabaseClient";
import { footerTopTypes } from "../types/Footer/footerTypes";
import { ServicesPathTypes } from "../types/commonTypes";
import { footerBottomTypes } from "../types/Footer/footerTypes";

export const getFooterData = async () => {
  try {
    const [footerTopData,footerContentData,footerBottomData] = await Promise.all([
      getDataPattern<footerTopTypes>("footer_top"),
      getDataPattern<ServicesPathTypes>("services"),
      getDataPattern<footerBottomTypes>("footer_bottom"),
    ]);
    return {
      footerTopData: footerTopData ?? [],
      footerContentData: footerContentData ?? [],
      footerBottomData:footerBottomData ?? [],
    };
  } catch (error) {
    console.error("Error fetching footer data:", error);
    return {
      footerTopData: [],
      footerContentData: [],
      footerBottomData:[],
    };
  }
};
