"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { ServicesPathTypes } from "../../types/commonTypes";
import GetDropDownLeftColumn from "./GetDropDownLeftColumn";
import GetDropDownRightColumn from "./GetDropDownRightColumn";

import useIsMobile from "../hooks/useIsMobile";
import useOutsideClick from "../hooks/useOutsideClick";
import useDropdownData from "../hooks/useDropdownData";
import useElementHeight from "../hooks/useElementHeight";

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
  const router = useRouter();
  const currentPath = usePathname();
  const isMobile = useIsMobile(768);

  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<Set<number>>(() => new Set());

  const leftSideRef = useRef<HTMLUListElement | null>(null);
  const dropdownRef = useRef<HTMLElement | null>(null);
  const clickTimeoutRef = useRef<Record<number, ReturnType<typeof setTimeout>>>(
    {}
  );

  const {
    leftItems,
    rightItems,
    activeItem,
    filteredRightItems,
    showRightColumn,
  } = useDropdownData(data, activeCategory, isMobile);

  const leftSideHeight = useElementHeight(leftSideRef, [leftItems]);

  const closeAll = useCallback(() => {
    setActiveCategory(null);
    setExpanded(new Set());
    onCloseDropdown?.();
  }, [onCloseDropdown]);

  useOutsideClick(dropdownRef, closeAll, true);

  useEffect(() => {
    setActiveCategory(null);
    setExpanded(new Set());
  }, [currentPath]);

  useEffect(() => {
    const timeouts = clickTimeoutRef.current;
    return () => Object.values(timeouts).forEach(clearTimeout);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) setTimeout(() => setActiveCategory(null), 150);
  }, [isMobile]);

  const handleLinkClick = useCallback(() => {
    // IMPORTANT: არ ვაუნმაუნთებთ dropdown-ს კლიკის წამში — მხოლოდ ვხურავთ.
    setActiveCategory(null);
    setExpanded(new Set());
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
      const href = item.path.startsWith("/") ? item.path : `/${item.path}`;

      if (isMobile && hasSub) {
        e.preventDefault();

        // double-tap-to-navigate
        if (clickTimeoutRef.current[item.id]) {
          clearTimeout(clickTimeoutRef.current[item.id]);
          delete clickTimeoutRef.current[item.id];
          router.push(href);
          handleLinkClick();
          return;
        }

        // expand / collapse
        setExpanded((prev) => {
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

      // desktop ან mobile item without subs: Link თვითონ გადაიყვანს,
      // ჩვენ უბრალოდ dropdown-ს ვხურავთ.
      handleLinkClick();
    },
    [isMobile, rightItems, router, handleLinkClick]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLAnchorElement>, item: ServicesPathTypes) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (!isMobile) setActiveCategory(item.id);
        else handleCategoryClick(e, item);
        return;
      }
      if (e.key === "Escape") closeAll();
    },
    [isMobile, handleCategoryClick, closeAll]
  );

  const leftColumnWidth = useMemo(() => {
    if (isMobile) return showRightColumn ? "16rem" : "100%";
    return buttonWidth ? `${buttonWidth}px` : "18rem";
  }, [isMobile, showRightColumn, buttonWidth]);

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
      <div
        className="bg-white flex-shrink-0"
        style={{ width: leftColumnWidth }}
      >
        <GetDropDownLeftColumn
          leftItems={leftItems}
          rightItems={rightItems}
          isMobile={isMobile}
          activeCategory={activeCategory}
          expanded={expanded}
          leftSideRef={leftSideRef}
          setActiveCategory={setActiveCategory}
          onCategoryClick={handleCategoryClick}
          onKeyDown={handleKeyDown}
          onLinkClick={handleLinkClick}
        />
      </div>

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
