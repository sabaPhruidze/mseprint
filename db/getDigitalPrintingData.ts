import { getDataPattern } from "../lib/supabaseClient";
import { PageStructureTypes } from "../types/commonTypes";

export const getDigitalPrintingPageData = async (
  pathname: string = "/commercial-digital-printing"
) => {
  if (pathname !== "/commercial-digital-printing") {
    return {
      CommercialDigitalPrintingPageData: [],
    };
  }

  try {
    const [CommercialDigitalPrintingPageData] = await Promise.all([
      getDataPattern<PageStructureTypes>("commercial_digital_printing"),
    ]);

    return {
      CommercialDigitalPrintingPageData: CommercialDigitalPrintingPageData ?? [],
    };
  } catch (error) {
    console.error("Error fetching commercial digital printing data:", error);
    return {
      CommercialDigitalPrintingPageData: [],
    };
  }
};
