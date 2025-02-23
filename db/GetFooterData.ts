import { getDataPattern } from "../lib/supabaseClient";
import { footerTopTypes } from "../types/Footer/footerTypes";

export const getFooterData = async () => {
  try {
    const [footerTopData] = await Promise.all([
      getDataPattern<footerTopTypes>("footer_top"),
    ]);
    return {
      footerTopData: footerTopData ?? [],
    };
  } catch (error) {
    console.error("Error fetching footer data:", error);
    return {
      footerTopData: [],
    };
  }
};
