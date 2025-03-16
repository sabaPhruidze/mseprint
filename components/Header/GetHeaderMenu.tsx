"use client";

import Link from "next/link";
import { useState } from "react";
import { PagePathTypes, ServicesPathTypes } from "../../types/commonTypes";
import GetDropDown from "./GetDropDown";

interface GetHeaderMenuProps {
  menuData: PagePathTypes[];
  servicesData: ServicesPathTypes[];
}

const GetHeaderMenu: React.FC<GetHeaderMenuProps> = ({
  menuData,
  servicesData,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="h-full relative"
    >
      <ul className="flex gap-6 h-full items-center">
        {menuData.map((item) => (
          <li
            key={item.id}
            className="h-full flex items-center"
            onMouseEnter={() =>
              item.page === "Products & Services" && setHovered(true)
            }
            onMouseLeave={() =>
              item.page === "Products & Services" && setHovered(false)
            }
          >
            <Link
              href={item.path || "/"}
              className={`font-inter-extrabold h-full flex items-center px-3 underline font-bold screen-size-26:text-3xl screen-size-20:text-2xl screen-size-18:text-3xl screen-size-5:text-2xl text-md transition-all duration-700 hover:bg-white hover:text-black`}
              aria-label={`Go to ${item.page}`}
              style={{ color: getMenuColor(item.page) }}
            >
              {item.page}
            </Link>
            {hovered && item.page === "Products & Services" && (
              <div className="absolute top-full left-0 bg-white shadow-xl rounded-md z-50 flex min-w-[600px]">
                <GetDropDown data={servicesData} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GetHeaderMenu;

function getMenuColor(page: string): string {
  switch (page) {
    case "Products & Services":
      return "#fb70c6";
    case "About us":
      return "#faa34d";
    case "Contact us":
      return "#69be4a";
    default:
      return "#ffffff";
  }
}
