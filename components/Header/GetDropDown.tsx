"use client";

import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ServicesPathTypes } from "../../types/commonTypes";

interface GetDropDownProps {
  data: ServicesPathTypes[];
  buttonWidth?: number;
  /**
   * Add a callback that parent can pass down, which we call to close the dropdown
   */
  onCloseDropdown?: () => void;
  /**
   * Aria label for the dropdown navigation
   */
  ariaLabel?: string;
  /**
   * ID for the dropdown (useful for aria-controls)
   */
  dropdownId?: string;
}

const GetDropDown: React.FC<GetDropDownProps> = ({
  data,
  buttonWidth,
  onCloseDropdown,
  ariaLabel = "Services navigation menu",
  dropdownId = "services-dropdown",
}) => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(true);
  const currentPath = usePathname();
  const leftSideRef = useRef<HTMLUListElement>(null);
  const [leftSideHeight, setLeftSideHeight] = useState<number>(0);

  const leftItems = useMemo(
    () => data.filter((item) => !item.parent_id),
    [data]
  );
  const rightItems = useMemo(
    () => data.filter((item) => item.parent_id),
    [data]
  );

  useEffect(() => {
    setActiveCategory(null);
  }, [currentPath]);

  useEffect(() => {
    if (leftSideRef.current) {
      setLeftSideHeight(leftSideRef.current.offsetHeight);
    }
  }, [leftItems]);

  const filteredRightItems = useMemo(
    () =>
      rightItems
        .filter((item) => item.parent_id === activeCategory)
        .sort((a, b) => a.title.localeCompare(b.title)),
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

  const handleMouseLeave = useCallback(() => {
    setActiveCategory(null);
  }, []);

  const handleLinkClick = useCallback(() => {
    setActiveCategory(null);
    setIsDropdownVisible(false);

    if (onCloseDropdown) {
      onCloseDropdown();
    }
  }, [onCloseDropdown]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent, itemId: number) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setActiveCategory(itemId);
      } else if (event.key === "Escape") {
        setActiveCategory(null);
        if (onCloseDropdown) {
          onCloseDropdown();
        }
      }
    },
    [onCloseDropdown]
  );

  // Generate structured data for better SEO
  const structuredData = useMemo(() => {
    const navigationItems = leftItems.map((item) => ({
      "@type": "SiteNavigationElement",
      name: item.title,
      url: item.path?.startsWith("/") ? item.path : `/${item.path}`,
      hasSubMenu: rightItems.some((subItem) => subItem.parent_id === item.id)
        ? rightItems
            .filter((subItem) => subItem.parent_id === item.id)
            .map((subItem) => ({
              "@type": "SiteNavigationElement",
              name: subItem.title,
              url: subItem.path?.startsWith("/")
                ? subItem.path
                : `/${subItem.path}`,
            }))
        : undefined,
    }));

    return {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      name: ariaLabel,
      hasPart: navigationItems,
    };
  }, [leftItems, rightItems, ariaLabel]);

  if (!isDropdownVisible) return null;

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <nav
        id={dropdownId}
        className="flex overflow-hidden rounded-xl border border-gray-200 shadow-lg"
        onMouseLeave={handleMouseLeave}
        aria-label={ariaLabel}
        role="navigation"
      >
        {/* LEFT COLUMN - Main Categories */}
        <div
          className="bg-white flex-shrink-0"
          style={{ width: buttonWidth ? `${buttonWidth}px` : "16rem" }}
        >
          <ul
            ref={leftSideRef}
            className="flex flex-col"
            role="menu"
            aria-label="Main service categories"
          >
            {leftItems.map((item, index) => (
              <li
                key={item.id}
                onMouseEnter={() => setActiveCategory(item.id)}
                role="none"
              >
                <Link
                  href={
                    item.path?.startsWith("/") ? item.path : `/${item.path}`
                  }
                  onClick={handleLinkClick}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                  role="menuitem"
                  tabIndex={0}
                  aria-expanded={activeCategory === item.id}
                  aria-haspopup={rightItems.some(
                    (subItem) => subItem.parent_id === item.id
                  )}
                  aria-describedby={
                    activeCategory === item.id
                      ? `submenu-${item.id}`
                      : undefined
                  }
                  title={`Navigate to ${item.title} services`}
                >
                  <span
                    className={`
                      block px-4 py-3 
                      text-sm font-medium
                      transition-colors duration-200
                      border border-gray-300
                      rounded-md
                      ${
                        activeCategory === item.id
                          ? "bg-blue-600 text-white"
                          : "text-gray-800 hover:bg-gray-100 hover:text-blue-600"
                      }
                    `}
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.title}
                    {/* Add visual indicator for items with submenus */}
                    {rightItems.some(
                      (subItem) => subItem.parent_id === item.id
                    ) && (
                      <span className="ml-2 text-xs" aria-hidden="true">
                        ▶
                      </span>
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT COLUMN - Subcategories */}
        {showRightColumn && activeItem && (
          <div
            id={`submenu-${activeItem.id}`}
            className="
              hidden
              screen-size-5:block
              bg-white
              border-l
              border-gray-300
              p-4
              overflow-y-auto
              overflow-x-hidden
            "
            style={{
              maxHeight: leftSideHeight ? `${leftSideHeight}px` : undefined,
            }}
            role="menu"
            aria-label={`${activeItem.title} subcategories`}
          >
            <h3 className="sr-only">{activeItem.title} Services</h3>
            <ul className="flex flex-wrap gap-2 items-start" role="none">
              {filteredRightItems.map((subItem) => (
                <li key={subItem.id} role="none">
                  <Link
                    href={
                      subItem.path.startsWith("/")
                        ? subItem.path
                        : `/${subItem.path}`
                    }
                    onClick={handleLinkClick}
                    role="menuitem"
                    tabIndex={0}
                    title={`Navigate to ${subItem.title}`}
                  >
                    <span
                      className="
                        block
                        border border-gray-300
                        rounded-md
                        transition-colors
                        duration-150
                        text-gray-800
                        text-sm
                        font-medium
                        px-3
                        py-2
                        hover:text-blue-600
                        hover:bg-gray-100
                      "
                      style={{
                        width: "250px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {subItem.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default GetDropDown;
