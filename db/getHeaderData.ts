import { getDataPattern } from "@/lib/supabaseClient";
import { headerEffectiveTextTypes } from "@/types/Header/headerTypes";
import { pagePathTypes } from "@/types/commonTypes";


export const getHeaderData = async () => {
  try {
    const [headerMenuData, headerEffectiveTextData, headerRegisterData, allPagesData,requestQuoteSendAFileData] = await Promise.all([
      getDataPattern<pagePathTypes>("header_menu"),
      getDataPattern<headerEffectiveTextTypes>("header_effective_text"),
      getDataPattern<pagePathTypes>("header_register"),
      getDataPattern<pagePathTypes>("all_pages_data"),
      getDataPattern<pagePathTypes>("request_quote_send_a_file") 
    ]);

    return {
      headerMenuData: headerMenuData ?? [],
      headerEffectiveTextData: headerEffectiveTextData ?? [],
      headerRegisterData: headerRegisterData ?? [],
      allPagesData: allPagesData ?? [], 
      requestQuoteSendAFileData: requestQuoteSendAFileData ?? []
    };
  } catch (error) {
    
    return {
      headerMenuData: [],
      headerEffectiveTextData: [],
      headerRegisterData: [],
      allPagesData: [],
      requestQuoteSendAFileData: [],
    };
  }
};
