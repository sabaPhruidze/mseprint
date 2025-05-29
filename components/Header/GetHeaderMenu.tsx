"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
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
  const [buttonWidth, setButtonWidth] = useState<number>(0);

  // This ref is only for the "Products & Services" link
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  // Whenever we hover on the "Products & Services" link, recalc width
  const handleMouseEnterProducts = () => {
    setHovered(true);
    if (linkRef.current) {
      setButtonWidth(linkRef.current.offsetWidth);
    }
  };

  // If you wish to update width on window resize as well, you can do so:
  useEffect(() => {
    const handleResize = () => {
      if (linkRef.current) {
        setButtonWidth(linkRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Called by the child dropdown whenever a link is clicked
  const closeDropdown = () => {
    setHovered(false);
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="relative h-full"
    >
      <ul className="flex h-full items-center  screen-size-5:gap-6 gap-3">
        {menuData.map((item) => {
          const isProducts = item.page === "Products & Services";

          return (
            <li
              key={item.id}
              className="relative flex h-full items-center"
              onMouseEnter={isProducts ? handleMouseEnterProducts : undefined}
              onMouseLeave={() => isProducts && setHovered(false)}
            >
              <Link
                ref={isProducts ? linkRef : null}
                href={item.path || "/"}
                aria-label={`Go to ${item.page}`}
                className={`
                  font-inter-extrabold
                  font-bold
                  screen-size-26:text-3xl
                  screen-size-20:text-2xl
                  screen-size-18:text-[26px]
                  screen-size-15:text-[22px]
                  screen-size-13.5:text-2xl
                  screen-size-13:text-[22px]
                  screen-size-5:text-2xl
                  text-md
                  flex
                  h-full
                  items-center
                  screen-size-10:px-3
                  screen-size-5:px-1
                  px-0
                  transition-all
                  duration-700
                  ${
                    isProducts && hovered
                      ? "bg-white text-black"
                      : "hover:bg-white hover:text-black"
                  }
                `}
                style={{
                  color:
                    isProducts && hovered ? undefined : getMenuColor(item.page),
                }}
              >
                {item.page}
              </Link>

              {hovered && isProducts && (
                <div className="absolute left-0 top-full z-50 flex bg-white shadow-xl rounded-md">
                  <GetDropDown
                    data={servicesData}
                    buttonWidth={buttonWidth || undefined}
                    onCloseDropdown={closeDropdown}
                  />
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
