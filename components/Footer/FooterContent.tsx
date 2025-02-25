"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ServicesPathTypes } from "../../types/commonTypes";

interface FooterContentProps {
  footerContentData: ServicesPathTypes[];
}

export default function FooterContent({
  footerContentData,
}: FooterContentProps) {
  if (!footerContentData || footerContentData.length === 0) {
    return <p>No footer content available.</p>;
  }

  const [numColumns, setNumColumns] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1920) {
        setNumColumns(8);
      } else if (width >= 1680) {
        setNumColumns(7);
      } else if (width >= 1440) {
        setNumColumns(6);
      } else if (width >= 1280) {
        setNumColumns(5);
      } else if (width >= 1024) {
        setNumColumns(4);
      } else if (width >= 768) {
        setNumColumns(3);
      } else if (width >= 640) {
        setNumColumns(2);
      } else {
        setNumColumns(1);
      }
    };

    // Set initial value
    handleResize();
    // Update on resize
    window.addEventListener("resize", handleResize);
    // Cleanup listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter top-level categories
  const topLevel = footerContentData.filter(
    (item) =>
      item.parent_id === null &&
      item.title !== "Online Ordering Portals" &&
      item.title !== "Graphic Design"
  );

  // Limit the number of categories to display based on numColumns
  const visibleCategories = topLevel.slice(0, numColumns);

  return (
    <div className="border-t border-gray-300">
      <nav aria-label="Footer Navigation">
        {/* Use flexbox to ensure single row with hidden overflow */}
        <div className="flex flex-nowrap overflow-hidden">
          {visibleCategories.map((category) => {
            // Filter sub-items for each category
            const subItems = footerContentData.filter(
              (sub) =>
                sub.parent_id === category.id &&
                sub.title !== "Online Ordering Portals" &&
                sub.title !== "Graphic Design"
            );

            return (
              <div
                key={category.id}
                className="flex-1 p-4 text-center min-w-0" // min-w-0 prevents flex items from overflowing
                itemScope
                itemType="http://schema.org/SiteNavigationElement"
              >
                <h2 className="text-xl font-bold mb-2">
                  <Link
                    href={`/${category.path}`}
                    itemProp="url"
                    className="group hover:underline"
                  >
                    <span
                      className="inline-block transition duration-800 group-hover:scale-110 group-hover:underline"
                      itemProp="name"
                    >
                      {category.title}
                    </span>
                  </Link>
                </h2>
                {subItems.length > 0 && (
                  <ul className="list-none space-y-1">
                    {subItems.map((sub) => (
                      <li
                        key={sub.id}
                        itemScope
                        itemType="http://schema.org/SiteNavigationElement"
                      >
                        <Link
                          href={`/${sub.path}`}
                          itemProp="url"
                          className="group hover:underline"
                        >
                          <span
                            className="inline-block transition duration-800 group-hover:scale-110 group-hover:underline"
                            itemProp="name"
                          >
                            {sub.title}
                          </span>
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
    </div>
  );
}
