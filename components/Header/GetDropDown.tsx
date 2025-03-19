"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ServicesPathTypes } from "../../types/commonTypes";

interface GetDropDownProps {
  data: ServicesPathTypes[];
  buttonWidth?: number;
}

const GetDropDown: React.FC<GetDropDownProps> = ({ data, buttonWidth }) => {
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

  useEffect(() => {
    setActiveCategory(null); // Reset on route change
  }, [currentPath]);

  const filteredRightItems = useMemo(
    () => rightItems.filter((item) => item.parent_id === activeCategory),
    [rightItems, activeCategory]
  );

  const activeItem = useMemo(
    () => leftItems.find((item) => item.id === activeCategory) || null,
    [leftItems, activeCategory]
  );

  const showRightColumn = useMemo(() => {
    if (!activeItem) return false;
    const lowerTitle = activeItem.title.toLowerCase();
    return (
      !["online ordering portals", "graphic design"].includes(lowerTitle) &&
      filteredRightItems.length > 0
    );
  }, [activeItem, filteredRightItems]);

  const handleMouseLeave = useCallback(() => setActiveCategory(null), []);

  return (
    <div
      className="flex rounded-xl shadow-lg border border-gray-200 overflow-hidden"
      onMouseLeave={handleMouseLeave}
    >
      {/* Left Column */}
      <div
        className="bg-white flex-shrink-0"
        style={{ width: buttonWidth ? `${buttonWidth}px` : "16rem" }}
      >
        <ul className="flex flex-col">
          {leftItems.map((item) => (
            <li key={item.id} onMouseEnter={() => setActiveCategory(item.id)}>
              <Link
                href={item.path?.startsWith("/") ? item.path : `/${item.path}`}
              >
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
        <div
          className="
            bg-gray-50
            px-6
            py-4
            min-w-[200px]
            border-l
            border-gray-300
            hidden
            screen-size-5:block
          "
        >
          <ul className="space-y-2">
            {filteredRightItems.map((subItem) => (
              <li key={subItem.id}>
                <Link
                  href={
                    subItem.path.startsWith("/")
                      ? subItem.path
                      : `/${subItem.path}`
                  }
                >
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
