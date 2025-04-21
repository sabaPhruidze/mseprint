// getRQContent.ts
import { getDataPattern } from "../lib/supabaseClient";
import { ReceivingPriceType } from "../types/commonTypes";

export const getRequestQuoteData = async (pathname: string) => {
  if (pathname !== "/request-quote") {
    return { requestQuoteContent: null };
  }

  try {
    const [requestQuoteData] = await Promise.all([
      getDataPattern<ReceivingPriceType>("request_quote_page"),
    ]);

    return {
      requestQuoteContent: requestQuoteData?.[0] || null,
    };
  } catch (error) {
    console.error("Error fetching request quote page:", error);
    return { requestQuoteContent: null };
  }
};
