import { getDataPattern } from "../lib/supabaseClient";
import { PageStructureTypes } from "../types/commonTypes";  // keep the relative path if needed


export const getBlogPagesData = async (pathname: string) => {
  try {
    switch (pathname) {
      case "/blog/corporate-printing-solutions": {
        const [blogCorporatePrintingSolutions] = await Promise.all([
          getDataPattern<PageStructureTypes>(
            "blog_corporate_printing_solutions"
          ),
        ]);

        return {
          blogCorporatePrintingSolutions:
            blogCorporatePrintingSolutions ?? [],
        };
      }
    case "/blog/affordable-printing-solutions": {
    const [BlogAffordablePrintingSolutionsPageData] = await Promise.all([
        getDataPattern<PageStructureTypes>("blog_affordable_printing_solutions"),
    ]);

    return {
        BlogAffordablePrintingSolutionsPageData: BlogAffordablePrintingSolutionsPageData ?? [],
    };
    }
  
    case "/blog/local-printing-services": {
    const [BlogLocalPrintingServicesPageData] = await Promise.all([
        getDataPattern<PageStructureTypes>("blog_local_printing_services"),
    ]);

    return {
        BlogLocalPrintingServicesPageData: BlogLocalPrintingServicesPageData ?? [],
    };
    }
    case "/blog/professional-printing-services": {
    const [BlogProfessionalPrintingServicesPageData] = await Promise.all([
        getDataPattern<PageStructureTypes>("blog_professional_printing_services"),
    ]);

    return {
        BlogProfessionalPrintingServicesPageData: BlogProfessionalPrintingServicesPageData ?? [],
    };
    }

        case "/blog/booklet-printing-services": {
        const [BlogBookletPrintingServicesPageData] = await Promise.all([
            getDataPattern<PageStructureTypes>("blog_booklet_printing_services"),
        ]);

        return {
            BlogBookletPrintingServicesPageData: BlogBookletPrintingServicesPageData ?? [],
        };
        }


      default:
        return {};
    }
  } catch (error) {
    console.error("Error fetching blog page data:", error);
    return {};
  }
};
