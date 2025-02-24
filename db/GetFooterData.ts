import { getDataPattern } from "../lib/supabaseClient";
import { footerTopTypes } from "../types/Footer/footerTypes";
import { ServicesPathTypes } from "../types/commonTypes";

export const getFooterData = async () => {
  try {
    const [footerTopData,footerContentData] = await Promise.all([
      getDataPattern<footerTopTypes>("footer_top"),
      getDataPattern<ServicesPathTypes>("services"),
    ]);
    return {
      footerTopData: footerTopData ?? [],
      footerContentData: footerContentData ?? []
    };
  } catch (error) {
    console.error("Error fetching footer data:", error);
    return {
      footerTopData: [],
      footerContentData: [],
    };
  }
};
