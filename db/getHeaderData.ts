import { getDataPattern } from "../lib/supabaseClient";
import { headerEffectiveTextTypes } from "../types/Header/headerTypes";
import { pagePathTypes } from "../types/commonTypes";
import { SEOImageProps } from "../types/commonTypes";


export const getHeaderData = async () => {
  try {
    const [headerMenuData, headerEffectiveTextData, headerRegisterData, allPagesData,requestQuoteSendAFileData,headerLogoData] = await Promise.all([
      getDataPattern<pagePathTypes>("header_menu"),
      getDataPattern<headerEffectiveTextTypes>("header_effective_text"),
      getDataPattern<pagePathTypes>("header_register"),
      getDataPattern<pagePathTypes>("all_pages_data"),
      getDataPattern<pagePathTypes>("header_request_quote_send_a_file") ,
      getDataPattern<SEOImageProps>("header_logo")
    ]);

    return {
      headerMenuData: headerMenuData ?? [],
      headerEffectiveTextData: headerEffectiveTextData ?? [],
      headerRegisterData: headerRegisterData ?? [],
      allPagesData: allPagesData ?? [], 
      requestQuoteSendAFileData: requestQuoteSendAFileData ?? [],
      headerLogoData:headerLogoData?? []
    };
  } catch (error) {
    
    return {
      headerMenuData: [],
      headerEffectiveTextData: [],
      headerRegisterData: [],
      allPagesData: [],
      requestQuoteSendAFileData: [],
      headerLogoData: [],
    };
  }
};
