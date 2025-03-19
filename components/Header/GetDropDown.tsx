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
}

const GetDropDown: React.FC<GetDropDownProps> = ({
  data,
  buttonWidth,
  onCloseDropdown,
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

  const handleMouseLeave = useCallback(() => {
    setActiveCategory(null);
  }, []);

  // Call parent's "onCloseDropdown" so it can reset 'hovered' to false
  const handleLinkClick = useCallback(() => {
    setActiveCategory(null);
    setIsDropdownVisible(false);

    if (onCloseDropdown) {
      onCloseDropdown();
    }
  }, [onCloseDropdown]);

  if (!isDropdownVisible) return null;

  return (
    <div
      className="flex overflow-hidden rounded-xl border border-gray-200 shadow-lg"
      onMouseLeave={handleMouseLeave}
    >
      {/* LEFT COLUMN */}
      <div
        className="bg-white flex-shrink-0"
        style={{ width: buttonWidth ? `${buttonWidth}px` : "16rem" }}
      >
        <ul ref={leftSideRef} className="flex flex-col">
          {leftItems.map((item) => (
            <li key={item.id} onMouseEnter={() => setActiveCategory(item.id)}>
              <Link
                href={item.path?.startsWith("/") ? item.path : `/${item.path}`}
                onClick={handleLinkClick}
              >
                <p
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
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT COLUMN */}
      {showRightColumn && (
        <div
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
        >
          <ul className="flex flex-wrap gap-2 items-start">
            {filteredRightItems.map((subItem) => (
              <li key={subItem.id}>
                <Link
                  href={
                    subItem.path.startsWith("/")
                      ? subItem.path
                      : `/${subItem.path}`
                  }
                  onClick={handleLinkClick} // Clicking closes dropdown
                >
                  <p
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
