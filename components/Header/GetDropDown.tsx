"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { ServicesPathTypes } from "../../types/commonTypes";
import GetDropDownLeftColumn from "./GetDropDownLeftColumn";
import GetDropDownRightColumn from "./GetDropDownRightColumn";

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
  const [isDropdownVisible, setIsDropdownVisible] = useState(true);
  const [mobileExpandedCategories, setMobileExpandedCategories] = useState<
    Set<number>
  >(new Set());
  const [isMobile, setIsMobile] = useState(false);

  const currentPath = usePathname();
  const leftSideRef = useRef<HTMLUListElement>(null);
  const dropdownRef = useRef<HTMLElement>(null);
  const [leftSideHeight, setLeftSideHeight] = useState(0);
  const clickTimeoutRef = useRef<Record<number, ReturnType<typeof setTimeout>>>(
    {}
  );

  /* --------------------------- data --------------------------- */

  const leftItems = useMemo(() => data.filter((x) => !x.parent_id), [data]);
  const rightItems = useMemo(() => data.filter((x) => x.parent_id), [data]);

  const filteredRightItems = useMemo(() => {
    return rightItems
      .filter((x) => x.parent_id === activeCategory)
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [rightItems, activeCategory]);

  const activeItem = useMemo(
    () => leftItems.find((x) => x.id === activeCategory) || null,
    [leftItems, activeCategory]
  );

  const showRightColumn = useMemo(() => {
    if (!activeItem || isMobile) return false;
    return filteredRightItems.length > 0;
  }, [activeItem, filteredRightItems, isMobile]);

  /* -------------------------- lifecycle -------------------------- */

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

  /* ------------------------ handlers ------------------------ */

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) {
      setTimeout(() => setActiveCategory(null), 150);
    }
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

        // double-tap-to-navigate
        if (clickTimeoutRef.current[item.id]) {
          clearTimeout(clickTimeoutRef.current[item.id]);
          delete clickTimeoutRef.current[item.id];

          window.location.href = item.path?.startsWith("/")
            ? item.path
            : `/${item.path}`;
          handleLinkClick();
          return;
        }

        // expand/collapse
        setMobileExpandedCategories((prev) => {
          const next = new Set(prev);
          if (next.has(item.id)) next.delete(item.id);
          else next.add(item.id);
          return next;
        });

        clickTimeoutRef.current[item.id] = setTimeout(() => {
          delete clickTimeoutRef.current[item.id];
        }, 500);

        return;
      }

      handleLinkClick();
    },
    [isMobile, rightItems, handleLinkClick]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLAnchorElement>, item: ServicesPathTypes) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (!isMobile) setActiveCategory(item.id);
        else handleCategoryClick(e, item);
        return;
      }
      if (e.key === "Escape") {
        setActiveCategory(null);
        onCloseDropdown?.();
      }
    },
    [isMobile, onCloseDropdown, handleCategoryClick]
  );

  /* --------------------- visual helpers --------------------- */

  const getLeftColumnWidth = () => {
    if (isMobile) return showRightColumn ? "16rem" : "100%";
    return buttonWidth ? `${buttonWidth}px` : "18rem";
  };

  if (!isDropdownVisible) return null;

  /* --------------------------- render --------------------------- */

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
        <GetDropDownLeftColumn
          leftItems={leftItems}
          rightItems={rightItems}
          isMobile={isMobile}
          activeCategory={activeCategory}
          expanded={mobileExpandedCategories}
          leftSideRef={leftSideRef}
          setActiveCategory={setActiveCategory}
          onCategoryClick={handleCategoryClick}
          onKeyDown={handleKeyDown}
          onLinkClick={handleLinkClick}
        />
      </div>

      {/* RIGHT COLUMN (desktop) */}
      {showRightColumn && activeItem && (
        <GetDropDownRightColumn
          activeItem={activeItem}
          items={filteredRightItems}
          leftSideHeight={leftSideHeight}
          onLinkClick={handleLinkClick}
        />
      )}
    </nav>
  );
};

export default GetDropDown;
