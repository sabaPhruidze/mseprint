import { getDataPattern } from "../lib/supabaseClient";
import { headerEffectiveTextTypes} from "../types/Header/headerTypes"
import { PagePathTypes } from "../types/commonTypes";
import { SEOImageProps } from "../types/commonTypes";


export const getHeaderData = async () => {
  try {
    const [headerMenuData, headerEffectiveTextData, headerRegisterData, allPagesData,requestQuoteSendAFileData,headerLogoData] = await Promise.all([
      getDataPattern<PagePathTypes>("header_menu"),
      getDataPattern<headerEffectiveTextTypes>("header_effective_text"),
      getDataPattern<PagePathTypes>("header_register"),
      getDataPattern<PagePathTypes>("all_pages_data"),
      getDataPattern<PagePathTypes>("header_request_quote_send_a_file") ,
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
