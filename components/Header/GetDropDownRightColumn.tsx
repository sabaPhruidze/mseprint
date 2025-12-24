"use client";

import Link from "next/link";
import { ServicesPathTypes } from "../../types/commonTypes";

type Props = {
  activeItem: ServicesPathTypes;
  items: ServicesPathTypes[];
  leftSideHeight: number;
  onLinkClick: () => void;
};

export default function GetDropDownRightColumn({
  activeItem,
  items,
  leftSideHeight,
  onLinkClick,
}: Props) {
  return (
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
        {items.map((sub) => (
          <Link
            key={sub.id}
            href={sub.path.startsWith("/") ? sub.path : `/${sub.path}`}
            onClick={onLinkClick}
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
  );
}
