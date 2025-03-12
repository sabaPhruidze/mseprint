import { getDataPattern } from "../lib/supabaseClient";
import { PageStructureTypes } from "../types/commonTypes";

export const getCategoryPagesData = async (pathname: string) => {
  try {
    switch (pathname) {
      case "/commercial-offset-printing": {
        const [CommercialOffsetPrintingPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("offset_printing_page"),
        ]);

        return {
          CommercialOffsetPrintingPageData: CommercialOffsetPrintingPageData ?? [],
        };
      }

      case "/commercial-digital-printing": {
        const [CommercialDigitalPrintingPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("digital_printing_page"),
        ]);

        return {
          CommercialDigitalPrintingPageData: CommercialDigitalPrintingPageData ?? [],
        };
      }
      case "/printing-copying": {
        const [PrintingCopyingPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("printing_copying_page"),
        ]);

        return {
          PrintingCopyingPageData: PrintingCopyingPageData ?? [],
        };
      }

      default:
        return {};
    }
  } catch (error) {
    console.error("Error fetching category pages data:", error);
    return {};
  }
};