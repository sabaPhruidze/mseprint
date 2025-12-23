"use client";

import { useCallback, useMemo, useState } from "react";
import { ServicesPathTypes } from "../../types/commonTypes";

const EXCLUDED = new Set(["Online Ordering Portals", "Graphic Design"]);

export function useFooterNav(data: ServicesPathTypes[]) {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const topLevelCategories = useMemo(() => {
    return (data ?? []).filter(
      (i) => i.parent_id === null && !EXCLUDED.has(i.title)
    );
  }, [data]);

  const subcategoriesMap = useMemo(() => {
    const map = new Map<number, ServicesPathTypes[]>();

    topLevelCategories.forEach((cat) => {
      const subs = (data ?? []).filter(
        (s) => s.parent_id === cat.id && !EXCLUDED.has(s.title)
      );
      map.set(cat.id, subs);
    });

    return map;
  }, [data, topLevelCategories]);

  const toggleCategory = useCallback((id: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  }, []);

  return { topLevelCategories, subcategoriesMap, expanded, toggleCategory };
}
