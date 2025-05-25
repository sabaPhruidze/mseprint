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
  onCloseDropdown?: () => void;
  ariaLabel?: string;
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
  const [mobileExpandedCategories, setMobileExpandedCategories] = useState<
    Set<number>
  >(new Set());
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const currentPath = usePathname();
  const leftSideRef = useRef<HTMLUListElement>(null);
  const [leftSideHeight, setLeftSideHeight] = useState<number>(0);
  const clickTimeoutRef = useRef<{ [key: number]: NodeJS.Timeout }>({});

  const leftItems = useMemo(
    () => data.filter((item) => !item.parent_id),
    [data]
  );
  const rightItems = useMemo(
    () => data.filter((item) => item.parent_id),
    [data]
  );

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setActiveCategory(null);
    setMobileExpandedCategories(new Set());
  }, [currentPath]);

  useEffect(() => {
    if (leftSideRef.current) {
      setLeftSideHeight(leftSideRef.current.offsetHeight);
    }
  }, [leftItems]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      Object.values(clickTimeoutRef.current).forEach((timeout) => {
        if (timeout) clearTimeout(timeout);
      });
    };
  }, []);

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
    if (!activeItem || isMobile) return false;
    const lowerTitle = activeItem.title.toLowerCase();
    return (
      !["online ordering portals", "graphic design"].includes(lowerTitle) &&
      filteredRightItems.length > 0
    );
  }, [activeItem, filteredRightItems, isMobile]);

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) {
      setActiveCategory(null);
    }
  }, [isMobile]);

  const handleLinkClick = useCallback(() => {
    setActiveCategory(null);
    setIsDropdownVisible(false);
    setMobileExpandedCategories(new Set());

    if (onCloseDropdown) {
      onCloseDropdown();
    }
  }, [onCloseDropdown]);

  const handleCategoryClick = useCallback(
    (event: React.MouseEvent, item: ServicesPathTypes) => {
      const hasSubItems = rightItems.some(
        (subItem) => subItem.parent_id === item.id
      );

      if (isMobile && hasSubItems) {
        event.preventDefault();

        // Clear any existing timeout for this item
        if (clickTimeoutRef.current[item.id]) {
          clearTimeout(clickTimeoutRef.current[item.id]);
          delete clickTimeoutRef.current[item.id];

          // Second click - navigate to page
          window.location.href = item.path?.startsWith("/")
            ? item.path
            : `/${item.path}`;
          handleLinkClick();
          return;
        }

        // First click - expand/collapse
        setMobileExpandedCategories((prev) => {
          const newSet = new Set(prev);
          if (newSet.has(item.id)) {
            newSet.delete(item.id);
          } else {
            newSet.add(item.id);
          }
          return newSet;
        });

        // Set timeout for double-click detection
        clickTimeoutRef.current[item.id] = setTimeout(() => {
          delete clickTimeoutRef.current[item.id];
        }, 500);
      } else {
        // Desktop or no subitems - normal navigation
        handleLinkClick();
      }
    },
    [isMobile, rightItems, handleLinkClick]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent, itemId: number) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        if (!isMobile) {
          setActiveCategory(itemId);
        }
      } else if (event.key === "Escape") {
        setActiveCategory(null);
        if (onCloseDropdown) {
          onCloseDropdown();
        }
      }
    },
    [isMobile, onCloseDropdown]
  );

  // Generate structured data for SEO
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
            {leftItems.map((item) => {
              const hasSubItems = rightItems.some(
                (subItem) => subItem.parent_id === item.id
              );
              const isExpanded = mobileExpandedCategories.has(item.id);
              const mobileSubItems = rightItems
                .filter((subItem) => subItem.parent_id === item.id)
                .sort((a, b) => a.title.localeCompare(b.title));

              return (
                <React.Fragment key={item.id}>
                  <li
                    onMouseEnter={() => !isMobile && setActiveCategory(item.id)}
                    role="none"
                  >
                    <Link
                      href={
                        item.path?.startsWith("/") ? item.path : `/${item.path}`
                      }
                      onClick={(e) => handleCategoryClick(e, item)}
                      onKeyDown={(e) => handleKeyDown(e, item.id)}
                      role="menuitem"
                      tabIndex={0}
                      aria-expanded={
                        isMobile ? isExpanded : activeCategory === item.id
                      }
                      aria-haspopup={hasSubItems}
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
                            activeCategory === item.id ||
                            (isMobile && isExpanded)
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
                        {hasSubItems && (
                          <span className="ml-2 text-xs" aria-hidden="true">
                            {isMobile ? (isExpanded ? "▼" : "▶") : "▶"}
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>

                  {/* Mobile subcategories - shown inline */}
                  {isMobile && isExpanded && hasSubItems && (
                    <li role="none">
                      <ul
                        className="bg-gray-50 rounded-md mx-2 mb-2 p-2 space-y-1"
                        role="menu"
                      >
                        {mobileSubItems.map((subItem) => (
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
                              className="
                                block
                                px-3
                                py-2
                                text-sm
                                text-gray-700
                                rounded
                                hover:bg-gray-200
                                hover:text-blue-600
                                transition-colors
                                duration-150
                              "
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        </div>

        {/* RIGHT COLUMN - Subcategories (Desktop only) */}
        {showRightColumn && activeItem && (
          <div
            id={`submenu-${activeItem.id}`}
            className="
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
