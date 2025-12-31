"use client";

import { useMemo } from "react";
import { ServicesPathTypes } from "../../types/commonTypes";

export default function useDropdownData(
  data: ServicesPathTypes[],
  activeCategory: number | null,
  isMobile: boolean
) {
  const leftItems = useMemo(() => data.filter((x) => !x.parent_id), [data]);
  const rightItems = useMemo(() => data.filter((x) => x.parent_id), [data]);

  const activeItem = useMemo(
    () => leftItems.find((x) => x.id === activeCategory) || null,
    [leftItems, activeCategory]
  );

  const filteredRightItems = useMemo(() => {
    return rightItems
      .filter((x) => x.parent_id === activeCategory)
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [rightItems, activeCategory]);

  const showRightColumn = useMemo(() => {
    if (!activeItem || isMobile) return false;
    return filteredRightItems.length > 0;
  }, [activeItem, filteredRightItems, isMobile]);

  return { leftItems, rightItems, activeItem, filteredRightItems, showRightColumn };
}
