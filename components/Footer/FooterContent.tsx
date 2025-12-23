"use client";

import { ServicesPathTypes } from "../../types/commonTypes";
import { useFooterNav } from "./useFooterNav";
import FooterNavMobile from "./FooterNavMobile";
import FooterNavDesktop from "./FooterNavDesktop";

type Props = { footerContentData: ServicesPathTypes[] };

export default function FooterContent({ footerContentData }: Props) {
  const safeData = footerContentData ?? [];

  const { topLevelCategories, subcategoriesMap, expanded, toggleCategory } =
    useFooterNav(safeData);

  if (!safeData.length) return null;

  return (
    <section
      className="border-t border-gray-300 max-h-[500px] overflow-y-auto screen-size-5:max-h-[800px] screen-size-5:overflow-hidden"
      aria-label="Footer navigation sections"
    >
      <nav aria-label="Footer services navigation">
        <div className="screen-size-5:hidden">
          <FooterNavMobile
            categories={topLevelCategories}
            subMap={subcategoriesMap}
            expanded={expanded}
            onToggle={toggleCategory}
          />
        </div>

        <div className="hidden screen-size-5:block">
          <FooterNavDesktop
            categories={topLevelCategories}
            subMap={subcategoriesMap}
          />
        </div>
      </nav>
    </section>
  );
}
