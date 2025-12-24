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
  const dropdownRef = useRef<HTMLElement>(null);
  const [leftSideHeight, setLeftSideHeight] = useState<number>(0);
  const clickTimeoutRef = useRef<Record<number, ReturnType<typeof setTimeout>>>(
    {}
  );

  const leftItems = useMemo(
    () => data.filter((item) => !item.parent_id),
    [data]
  );
  const rightItems = useMemo(
    () => data.filter((item) => item.parent_id),
    [data]
  );

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setActiveCategory(null);
    setMobileExpandedCategories(new Set());
  }, [currentPath]);

  useEffect(() => {
    if (leftSideRef.current)
      setLeftSideHeight(leftSideRef.current.offsetHeight);
  }, [leftItems]);

  useEffect(() => {
    const timeouts = clickTimeoutRef.current;
    return () => Object.values(timeouts).forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveCategory(null);
        onCloseDropdown?.();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onCloseDropdown]);

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
    return filteredRightItems.length > 0;
  }, [activeItem, filteredRightItems, isMobile]);

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) setTimeout(() => setActiveCategory(null), 150);
  }, [isMobile]);

  const handleLinkClick = useCallback(() => {
    setActiveCategory(null);
    setIsDropdownVisible(false);
    setMobileExpandedCategories(new Set());
    onCloseDropdown?.();
  }, [onCloseDropdown]);

  const handleCategoryClick = useCallback(
    (
      e:
        | React.MouseEvent<HTMLAnchorElement>
        | React.KeyboardEvent<HTMLAnchorElement>,
      item: ServicesPathTypes
    ) => {
      const hasSub = rightItems.some((s) => s.parent_id === item.id);

      if (isMobile && hasSub) {
        e.preventDefault();

        if (clickTimeoutRef.current[item.id]) {
          clearTimeout(clickTimeoutRef.current[item.id]);
          delete clickTimeoutRef.current[item.id];
          window.location.href = item.path?.startsWith("/")
            ? item.path
            : `/${item.path}`;
          handleLinkClick();
          return;
        }

        setMobileExpandedCategories((prev) => {
          const next = new Set(prev);
          next.has(item.id) ? next.delete(item.id) : next.add(item.id);
          return next;
        });

        clickTimeoutRef.current[item.id] = setTimeout(() => {
          delete clickTimeoutRef.current[item.id];
        }, 500);
      } else {
        handleLinkClick();
      }
    },
    [isMobile, rightItems, handleLinkClick]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLAnchorElement>, item: ServicesPathTypes) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (!isMobile) setActiveCategory(item.id);
        else handleCategoryClick(e, item);
      } else if (e.key === "Escape") {
        setActiveCategory(null);
        onCloseDropdown?.();
      }
    },
    [isMobile, onCloseDropdown, handleCategoryClick]
  );

  const getLeftColumnWidth = () => {
    if (isMobile) return showRightColumn ? "16rem" : "100%";
    return buttonWidth ? `${buttonWidth}px` : "18rem";
  };

  if (!isDropdownVisible) return null;

  return (
    <nav
      ref={dropdownRef}
      id={dropdownId}
      className="flex overflow-hidden rounded-lg border border-gray-200 shadow-xl bg-white"
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
      role="navigation"
      style={{ maxHeight: "80vh" }}
    >
      {/* LEFT COLUMN */}
      <div
        className="bg-white flex-shrink-0"
        style={{ width: getLeftColumnWidth() }}
      >
        <ul
          ref={leftSideRef}
          className="flex flex-col p-2 gap-1 overflow-y-auto"
          role="menu"
          aria-label="Main service categories"
          style={{ maxHeight: "75vh" }}
        >
          {leftItems.map((item) => {
            const hasSub = rightItems.some((s) => s.parent_id === item.id);
            const expanded = mobileExpandedCategories.has(item.id);
            const isActive =
              activeCategory === item.id || (isMobile && expanded);

            const mobileSubs = rightItems
              .filter((s) => s.parent_id === item.id)
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
                    onKeyDown={(e) => handleKeyDown(e, item)}
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
                          {isMobile ? (expanded ? "▼" : "▶") : "▶"}
                        </span>
                      )}
                    </div>
                  </Link>
                </li>

                {/* Mobile Sub-categories */}
                {isMobile && expanded && hasSub && (
                  <li role="none" className="mb-2">
                    <div className="bg-gray-50 rounded-md mx-2 p-3 border border-gray-200">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {mobileSubs.map((sub) => (
                          <Link
                            key={sub.id}
                            href={
                              sub.path.startsWith("/")
                                ? sub.path
                                : `/${sub.path}`
                            }
                            onClick={handleLinkClick}
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
      </div>

      {/* RIGHT COLUMN (desktop) */}
      {showRightColumn && activeItem && (
        <div
          id={`submenu-${activeItem.id}`}
          className="bg-gray-50 border-l border-gray-200 p-4 overflow-y-auto"
          style={{
            width: "24rem",
            maxHeight: leftSideHeight || "75vh",
            minHeight: "200px",
          }}
          role="menu"
          aria-label={`${activeItem.title} subcategories`}
        >
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">
              {activeItem.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {filteredRightItems.map((sub) => (
              <Link
                key={sub.id}
                href={sub.path.startsWith("/") ? sub.path : `/${sub.path}`}
                onClick={handleLinkClick}
                role="menuitem"
                tabIndex={0}
                title={`Navigate to ${sub.title}`}
                className="group block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded-md"
              >
                <div className="p-3 bg-white border border-gray-200 rounded-md hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 min-h-[52px] flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-800 group-hover:text-blue-700 flex-1 truncate pr-2">
                    {sub.title}
                  </span>
                  <div className="text-gray-400 group-hover:text-blue-600 transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default GetDropDown;
