"use client";

import React from "react";
import Link from "next/link";
import { ServicesPathTypes } from "../../types/commonTypes";

type Props = {
  leftItems: ServicesPathTypes[];
  rightItems: ServicesPathTypes[];
  isMobile: boolean;
  activeCategory: number | null;
  expanded: Set<number>;
  leftSideRef: React.RefObject<HTMLUListElement | null>;
  setActiveCategory: (id: number) => void;
  onCategoryClick: (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.KeyboardEvent<HTMLAnchorElement>,
    item: ServicesPathTypes
  ) => void;
  onKeyDown: (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    item: ServicesPathTypes
  ) => void;
  onLinkClick: () => void;
};

export default function GetDropDownLeftColumn({
  leftItems,
  rightItems,
  isMobile,
  activeCategory,
  expanded,
  leftSideRef,
  setActiveCategory,
  onCategoryClick,
  onKeyDown,
  onLinkClick,
}: Props) {
  return (
    <ul
      ref={leftSideRef}
      className="flex flex-col p-2 gap-1 overflow-y-auto"
      role="menu"
      aria-label="Main service categories"
      style={{ maxHeight: "75vh" }}
    >
      {leftItems.map((item) => {
        const hasSub = rightItems.some((s) => s.parent_id === item.id);
        const isExpanded = expanded.has(item.id);
        const isActive = activeCategory === item.id || (isMobile && isExpanded);

        const mobileSubs = rightItems
          .filter((s) => s.parent_id === item.id)
          .sort((a, b) => a.title.localeCompare(b.title));

        return (
          <React.Fragment key={item.id}>
            <li
              role="none"
              onMouseEnter={() => {
                if (!isMobile) setActiveCategory(item.id);
              }}
            >
              <Link
                href={item.path.startsWith("/") ? item.path : `/${item.path}`}
                onClick={(e) => onCategoryClick(e, item)}
                onKeyDown={(e) => onKeyDown(e, item)}
                role="menuitem"
                tabIndex={0}
                aria-expanded={isActive}
                aria-haspopup={hasSub}
                title={`Navigate to ${item.title} services`}
                className="block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded-md"
              >
                <div
                  className={`
                    flex items-center justify-between px-4 py-3.5 text-sm font-medium
                    transition-all duration-200 border rounded-md min-h-[52px]
                    ${
                      isActive
                        ? "bg-blue-600 text-white border-blue-600 shadow-md"
                        : "text-gray-700 border-gray-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300"
                    }
                  `}
                >
                  <span
                    className="flex-1 text-left truncate pr-2"
                    title={item.title}
                  >
                    {item.title}
                  </span>
                  {hasSub && (
                    <span
                      className={`text-xs transition-transform duration-200 ${
                        isActive ? "text-white" : "text-gray-400"
                      }`}
                      aria-hidden="true"
                    >
                      {isMobile ? (isExpanded ? "▼" : "▶") : "▶"}
                    </span>
                  )}
                </div>
              </Link>
            </li>

            {isMobile && isExpanded && hasSub && (
              <li role="none" className="mb-2">
                <div className="bg-gray-50 rounded-md mx-2 p-3 border border-gray-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {mobileSubs.map((sub) => (
                      <Link
                        key={sub.id}
                        href={
                          sub.path.startsWith("/") ? sub.path : `/${sub.path}`
                        }
                        onClick={onLinkClick}
                        role="menuitem"
                        tabIndex={0}
                        title={`Navigate to ${sub.title}`}
                        className="px-3 py-2.5 text-sm text-gray-700 bg-white rounded-md border border-gray-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px] flex items-center"
                      >
                        <span className="truncate" title={sub.title}>
                          {sub.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
}
