"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { PagePathTypes, ServicesPathTypes } from "../../types/commonTypes";
import GetDropDown from "./GetDropDown";

interface GetHeaderMenuProps {
  menuData: PagePathTypes[];
  servicesData: ServicesPathTypes[];
}

const MENU_LINK_CLASS =
  "font-inter-extrabold font-bold flex h-full items-center transition-all duration-700 " +
  "text-md screen-size-5:text-2xl screen-size-13:text-[22px] screen-size-15:text-[22px] " +
  "screen-size-18:text-[26px] screen-size-20:text-2xl screen-size-26:text-3xl " +
  "px-0 screen-size-5:px-1 screen-size-10:px-3";

export default function GetHeaderMenu({
  menuData,
  servicesData,
}: GetHeaderMenuProps) {
  const [open, setOpen] = useState(false);
  const [buttonWidth, setButtonWidth] = useState<number>(0);
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const measure = useCallback(() => {
    if (linkRef.current) setButtonWidth(linkRef.current.offsetWidth);
  }, []);

  const openDropdown = useCallback(() => {
    setOpen(true);
    measure();
  }, [measure]);

  const closeDropdown = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

  const onProductsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!open) {
      e.preventDefault();
      openDropdown();
    }
  };

  const onProductsKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === "Escape") closeDropdown();
    if ((e.key === "Enter" || e.key === " ") && !open) {
      e.preventDefault();
      openDropdown();
    }
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="relative h-full"
    >
      <ul className="flex h-full items-center screen-size-5:gap-6 gap-3">
        {menuData.map((item) => {
          const isProducts = item.page === "Products & Services";
          const dropdownId = "services-dropdown";
          const isActive = isProducts && open;

          return (
            <li
              key={item.id}
              className="relative flex h-full items-center"
              onMouseEnter={isProducts ? openDropdown : undefined}
              onMouseLeave={isProducts ? closeDropdown : undefined}
            >
              <Link
                ref={isProducts ? linkRef : null}
                href={item.path || "/"}
                aria-label={`Go to ${item.page}`}
                aria-haspopup={isProducts ? "menu" : undefined}
                aria-expanded={isProducts ? open : undefined}
                aria-controls={isProducts ? dropdownId : undefined}
                onClick={isProducts ? onProductsClick : undefined}
                onKeyDown={isProducts ? onProductsKeyDown : undefined}
                className={`${MENU_LINK_CLASS} ${
                  isActive
                    ? "bg-white text-black"
                    : "hover:bg-white hover:text-black"
                }`}
                style={{
                  color: isActive ? undefined : getMenuColor(item.page),
                }}
              >
                {item.page}
              </Link>

              {isActive && (
                <div className="absolute left-0 top-full z-50 flex bg-white shadow-xl rounded-md">
                  <GetDropDown
                    data={servicesData}
                    buttonWidth={buttonWidth || undefined}
                    onCloseDropdown={closeDropdown}
                    dropdownId={dropdownId}
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
