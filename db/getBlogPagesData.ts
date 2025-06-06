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
      default:
        return {};
    }
  } catch (error) {
    console.error("Error fetching blog page data:", error);
    return {};
  }
};
