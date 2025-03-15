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
      case "/direct-mail": {
        const [DirectMailMailingServicesPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("direct_mail_mailing_services"),
        ]);

        return {
          DirectMailMailingServicesPageData: DirectMailMailingServicesPageData ?? [],
        };
      }
      case "/signs": {
        const [SignsPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("signs_page"),
        ]);

        return {
          SignsPageData: SignsPageData ?? [],
        };
      }
      case "/online-ordering-portals": {
        const [OnlineOrderingPortalsPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("online_ordering_portals_page"),
        ]);

        return {
          OnlineOrderingPortalsPageData: OnlineOrderingPortalsPageData ?? [],
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