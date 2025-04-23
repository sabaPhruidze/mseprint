// getRQContent.ts
import { getDataPattern } from "../lib/supabaseClient";
import { ReceivingPriceType } from "../types/commonTypes";

export const getRQSFData = async (pathname: string) => {
  try {
    if (pathname === "/request-quote") {
      const [requestQuoteData] = await Promise.all([
        getDataPattern<ReceivingPriceType>("request_quote_page"),
      ]);

      return {
        requestQuoteContent: requestQuoteData?.[0] || null,
        sendFileContent: null,
      };
    }

    if (pathname === "/send-file") {
      const [sendFileData] = await Promise.all([
        getDataPattern<ReceivingPriceType>("send_file_page"), // adjust type if you add a SendFilePageType
      ]);

      return {
        requestQuoteContent: null,
        sendFileContent: sendFileData?.[0] || null,
      };
    }

    // any other route
    return { requestQuoteContent: null, sendFileContent: null };
  } catch (error) {
    console.error("Error fetching page data:", error);
    return { requestQuoteContent: null, sendFileContent: null };
  }
};
