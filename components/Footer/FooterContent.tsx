"use client";

import Link from "next/link";
import { useState, useCallback, useMemo } from "react";
import { ServicesPathTypes } from "../../types/commonTypes";

interface FooterContentProps {
  footerContentData: ServicesPathTypes[];
}

export default function FooterContent({
  footerContentData,
}: FooterContentProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(
    new Set()
  );

  const topLevelCategories = useMemo(() => {
    return (
      footerContentData?.filter(
        (item) =>
          item.parent_id === null &&
          item.title !== "Online Ordering Portals" &&
          item.title !== "Graphic Design"
      ) || []
    );
  }, [footerContentData]);

  const subcategoriesMap = useMemo(() => {
    const map = new Map<number, ServicesPathTypes[]>();
    topLevelCategories.forEach((category) => {
      const subItems =
        footerContentData?.filter(
          (sub) =>
            sub.parent_id === category.id &&
            sub.title !== "Online Ordering Portals" &&
            sub.title !== "Graphic Design"
        ) || [];
      map.set(category.id, subItems);
    });
    return map;
  }, [footerContentData, topLevelCategories]);

  const toggleCategory = useCallback((categoryId: number) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) newSet.delete(categoryId);
      else newSet.add(categoryId);
      return newSet;
    });
  }, []);

  if (!footerContentData || footerContentData.length === 0) {
    return (
      <div aria-label="Footer content unavailable">
        <p>No footer content available.</p>
      </div>
    );
  }

  return (
    <section
      className="border-t border-gray-300 screen-size-5:max-h-[800px] screen-size-5:overflow-hidden overflow-y-auto max-h-[500px]"
      aria-label="Footer navigation sections"
    >
      {/* Mobile/Small Screen Layout (screen-size-5 and below) */}
      <nav
        className="screen-size-5:hidden"
        aria-label="Mobile footer navigation"
        role="navigation"
      >
        <div className="divide-y divide-gray-300">
          {topLevelCategories.map((category) => {
            const subItems = subcategoriesMap.get(category.id) || [];
            const isExpanded = expandedCategories.has(category.id);
            const hasSubItems = subItems.length > 0;

            return (
              <div key={category.id} className="p-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={
                    hasSubItems ? () => toggleCategory(category.id) : undefined
                  }
                  onKeyDown={(e) => {
                    if (hasSubItems && (e.key === "Enter" || e.key === " ")) {
                      e.preventDefault();
                      toggleCategory(category.id);
                    }
                  }}
                  role={hasSubItems ? "button" : undefined}
                  tabIndex={hasSubItems ? 0 : undefined}
                  aria-expanded={hasSubItems ? isExpanded : undefined}
                  aria-controls={
                    hasSubItems ? `subcategory-${category.id}` : undefined
                  }
                  aria-label={
                    hasSubItems
                      ? `Toggle ${category.title} subcategories`
                      : undefined
                  }
                >
                  <h3 className="text-xl font-bold hover:underline hover:scale-110 transition duration-800">
                    <Link
                      href={`/${category.path}`}
                      aria-label={`Navigate to ${category.title} page`}
                      className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded "
                    >
                      {category.title}
                    </Link>
                  </h3>
                  {hasSubItems && (
                    <span
                      className="text-xl font-bold select-none"
                      aria-hidden="true"
                    >
                      {isExpanded ? "−" : "+"}
                    </span>
                  )}
                </div>

                {hasSubItems && isExpanded && (
                  <div
                    id={`subcategory-${category.id}`}
                    className="mt-3 pl-4 border-l-2 border-gray-200 animate-in slide-in-from-top-2 duration-300"
                    aria-hidden={false}
                  >
                    <ul
                      className="list-none space-y-2"
                      role="list"
                      aria-label={`${category.title} subcategories`}
                    >
                      {subItems.map((sub) => (
                        <li
                          key={sub.id}
                          className="text-gray-700 hover:text-blue-600 hover:underline hover:scale-105 transition duration-300 text-base"
                          role="listitem"
                        >
                          <Link
                            href={`/${sub.path}`}
                            className="block py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded  dark:text-white"
                            aria-label={`Navigate to ${sub.title} page`}
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Desktop/Larger Screen Layout (screen-size-5 and above) */}
      <nav
        className="hidden screen-size-5:block"
        aria-label="Desktop footer navigation"
        role="navigation"
      >
        <div
          className="
            grid
            grid-cols-2
            screen-size-10:grid-cols-3
            screen-size-13:grid-cols-4
            screen-size-15:grid-cols-5
            screen-size-18:grid-cols-6
            screen-size-20:grid-cols-7
            screen-size-23:grid-cols-8
            divide-x divide-gray-300
          "
        >
          {topLevelCategories.map((category) => {
            const subItems = subcategoriesMap.get(category.id) || [];

            return (
              <div key={category.id} className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2 hover:underline hover:scale-110 transition duration-800">
                  <Link
                    href={`/${category.path}`}
                    aria-label={`Navigate to ${category.title} page`}
                    className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                  >
                    {category.title}
                  </Link>
                </h3>

                {subItems.length > 0 && (
                  <ul
                    className="list-none space-y-1"
                    role="list"
                    aria-label={`${category.title} subcategories`}
                  >
                    {subItems.map((sub) => (
                      <li
                        key={sub.id}
                        className="hover:underline hover:scale-110 transition duration-800"
                        role="listitem"
                      >
                        <Link
                          href={`/${sub.path}`}
                          aria-label={`Navigate to ${sub.title} page`}
                          className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded "
                        >
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </section>
  );
}
