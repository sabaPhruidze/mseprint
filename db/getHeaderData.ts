import { getDataPattern } from "@/lib/supabaseClient";
import { headerEffectiveTextTypes } from "@/types/Header/headerTypes";
import { pagePathTypes } from "@/types/commonTypes";


export const getHeaderData = async () => {
  try {
    const [headerMenuData, headerEffectiveTextData, headerRegisterData, allPagesData] = await Promise.all([
      getDataPattern<pagePathTypes>("header_menu"),
      getDataPattern<headerEffectiveTextTypes>("header_effective_text"),
      getDataPattern<pagePathTypes>("header_register"),
      getDataPattern<pagePathTypes>("all_pages_data"), 
    ]);

    return {
      headerMenuData: headerMenuData ?? [],
      headerEffectiveTextData: headerEffectiveTextData ?? [],
      headerRegisterData: headerRegisterData ?? [],
      allPagesData: allPagesData ?? [], 
    };
  } catch (error) {
    
    return {
      headerMenuData: [],
      headerEffectiveTextData: [],
      headerRegisterData: [],
      allPagesData: [],
    };
  }
};
