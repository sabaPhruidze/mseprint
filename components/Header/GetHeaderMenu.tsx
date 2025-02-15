"use client";

import Link from "next/link";
import { pagePathTypes } from "@/types/commonTypes";

interface GetHeaderMenuProps {
  menuData: pagePathTypes[];
}

const GetHeaderMenu: React.FC<GetHeaderMenuProps> = ({ menuData }) => {
  return (
    <nav role="navigation" aria-label="Main navigation">
      <ul className="flex gap-6">
        {menuData.map((item) => (
          <li key={item.id}>
            <Link
              href={item.path || "/"}
              className="hover:underline font-bold transition-all duration-200 screen-size-26:text-3xl screen-size-20:text-2xl screen-size-18:text-3xl screen-size-5:text-2xl text-md"
              aria-label={`Go to ${item.page}`}
              style={{ color: getMenuColor(item.page) }}
            >
              {item.page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GetHeaderMenu;

// ✅ Function to get menu colors
function getMenuColor(page: string): string {
  switch (page) {
    case "Products & Services":
      return "#fb70c6"; // pink
    case "About us":
      return "#faa34d"; // orange
    case "Contact us":
      return "#69be4a"; // green
    default:
      return "#ffffff"; // white
  }
}
