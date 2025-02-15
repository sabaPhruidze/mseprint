"use client";

import Link from "next/link";
import { pagePathTypes } from "@/types/commonTypes";

interface GetHeaderMenuProps {
  menuData: pagePathTypes[];
}

const GetHeaderMenu: React.FC<GetHeaderMenuProps> = ({ menuData }) => {
  return (
    <nav
      className="header-navigation"
      role="navigation"
      aria-label="Main navigation"
    >
      <ul className="flex gap-4">
        {menuData.map((item) => (
          <li key={item.id}>
            <Link
              href={item.path || "/"}
              className="hover:underline"
              aria-label={`Go to ${item.page}`}
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
