"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ServicesPathTypes } from "../../types/commonTypes";

interface GetDropDownProps {
  data: ServicesPathTypes[];
}

const GetDropDown: React.FC<GetDropDownProps> = ({ data }) => {
  // Filter main categories and sub-items
  const leftItems = useMemo(
    () => data.filter((item) => !item.parent_id),
    [data]
  );
  const rightItems = useMemo(
    () => data.filter((item) => item.parent_id),
    [data]
  );

  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const currentPath = usePathname();

  // Reset active category when path changes
  useEffect(() => {
    setActiveCategory(null);
  }, [currentPath]);

  // Filter sub-items based on active category
  const filteredRightItems = useMemo(
    () => rightItems.filter((item) => item.parent_id === activeCategory),
    [rightItems, activeCategory]
  );

  const activeItem = useMemo(
    () => leftItems.find((item) => item.id === activeCategory),
    [leftItems, activeCategory]
  );

  // Determine when to show right column
  const showRightColumn = useMemo(
    () =>
      activeCategory !== null &&
      activeItem &&
      !["online ordering portals", "graphic design"].includes(
        activeItem.title.toLowerCase()
      ) &&
      filteredRightItems.length > 0,
    [activeCategory, activeItem, filteredRightItems]
  );

  const handleMouseLeave = useCallback(() => setActiveCategory(null), []);

  return (
    <div
      className="flex rounded-xl shadow-lg border border-gray-200 overflow-hidden"
      onMouseLeave={handleMouseLeave}
    >
      {/* Left Column */}
      <div className="bg-white w-64 flex-shrink-0">
        <ul className="flex flex-col">
          {leftItems.map((item) => (
            <li key={item.id} onMouseEnter={() => setActiveCategory(item.id)}>
              <Link href={item.path || "/"}>
                <p
                  className={`block px-4 py-3 cursor-pointer transition-colors duration-200 text-sm ${
                    activeCategory === item.id
                      ? "bg-blue-600 text-white"
                      : "text-gray-800 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  {item.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column */}
      {showRightColumn && (
        <div className="bg-gray-50 px-6 py-4 min-w-[200px] border-l border-gray-300">
          <ul className="space-y-2">
            {filteredRightItems.map((subItem) => (
              <li key={subItem.id}>
                <Link href={subItem.path || "/"}>
                  <p className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors duration-150">
                    {subItem.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GetDropDown;
