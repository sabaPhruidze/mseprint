import { getDataPattern } from "@/lib/supabaseClient";
import { headerEffectiveTextTypes } from "@/types/Header/headerTypes";
import { pagePathTypes } from "@/types/commonTypes";

export const getHeaderData = async () => {
  try {
    const [headerMenuData, headerEffectiveTextData, headerRegisterData] = await Promise.all([
      getDataPattern<pagePathTypes>("header_menu"),
      getDataPattern<headerEffectiveTextTypes>("header_effective_text"),
      getDataPattern<pagePathTypes>("header_register"),
    ]);

    return {
      headerMenuData: headerMenuData ?? [], // Ensures it never returns `undefined`
      headerEffectiveTextData: headerEffectiveTextData ?? [],
      headerRegisterData: headerRegisterData ?? [],
    };
  } catch (error) {
    console.error("Error fetching header data:", error);
    return {
      headerMenuData: [],
      headerEffectiveTextData: [],
      headerRegisterData: [],
    }; // Ensures it always returns arrays
  }
};
