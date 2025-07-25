import { getDataPattern } from "../lib/supabaseClient";
import { headerEffectiveTextTypes } from "../types/Header/headerTypes";
import { PagePathTypes, SEOImageProps } from "../types/commonTypes";
import { cache } from "react";

export const getHeaderData = cache(async () => {
  try {
    const [headerMenuData, headerEffectiveTextData, headerRegisterData, requestQuoteSendAFileData, headerLogoData] = await Promise.all([
      getDataPattern<PagePathTypes>("header_menu"),
      getDataPattern<headerEffectiveTextTypes>("header_effective_text"),
      getDataPattern<PagePathTypes>("header_register"),
      getDataPattern<PagePathTypes>("header_request_quote_send_a_file"),
      getDataPattern<SEOImageProps>("header_logo")
    ]);

    return {
      headerMenuData: headerMenuData ?? [],
      headerEffectiveTextData: headerEffectiveTextData ?? [],
      headerRegisterData: headerRegisterData ?? [],
      requestQuoteSendAFileData: requestQuoteSendAFileData ?? [],
      headerLogoData: headerLogoData ?? []
    };
  } catch (error) {
    return {
      headerMenuData: [],
      headerEffectiveTextData: [],
      headerRegisterData: [],
      requestQuoteSendAFileData: [],
      headerLogoData: [],
    };
  }
});
