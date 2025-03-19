"use client";

import Link from "next/link";
import { useState } from "react";
import { PagePathTypes, ServicesPathTypes } from "../../types/commonTypes";
import GetDropDown from "./GetDropDown";

interface GetHeaderMenuProps {
  menuData: PagePathTypes[];
  servicesData: ServicesPathTypes[];
}

export default function GetHeaderMenu({
  menuData,
  servicesData,
}: GetHeaderMenuProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="h-full relative"
    >
      <ul className="flex gap-6 h-full items-center">
        {menuData.map((item) => {
          // Check if this item is the "Products & Services" link
          const isProducts = item.page === "Products & Services";

          return (
            <li
              key={item.id}
              className="h-full flex items-center"
              onMouseEnter={() => isProducts && setHovered(true)}
              onMouseLeave={() => isProducts && setHovered(false)}
            >
              <Link
                href={item.path || "/"}
                aria-label={`Go to ${item.page}`}
                className={`
                  font-inter-extrabold
                  h-full
                  flex
                  items-center
                  px-3
                  underline
                  font-bold
                  screen-size-26:text-3xl
                  screen-size-20:text-2xl
                  screen-size-18:text-3xl
                  screen-size-5:text-2xl
                  text-md
                  transition-all
                  duration-700
                  ${!isProducts ? "hover:bg-white hover:text-black" : ""}
                  ${isProducts && hovered ? "bg-white text-black" : ""}
                `}
                style={{
                  color:
                    isProducts && hovered ? undefined : getMenuColor(item.page),
                }}
              >
                {item.page}
              </Link>

              {hovered && isProducts && (
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-md z-50 flex">
                  <GetDropDown data={servicesData} />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

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
