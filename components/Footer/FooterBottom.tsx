import React from "react";
import Link from "next/link";
import { footerBottomTypes } from "../../types/Footer/footerTypes";

interface FooterBottomProps {
  footerBottomData: footerBottomTypes[];
}

const FooterBottom: React.FC<FooterBottomProps> = ({ footerBottomData }) => {
  if (!footerBottomData.length) return null;

  const { address, pages } = footerBottomData[0].data.footer_bottom;

  return (
    <div
      className="
        w-full
        bg-black
        text-white
        text-center
        flex
        flex-col
        h-auto
        px-[60px]
        py-5
        items-center
        screen-size-15:flex-row
        screen-size-15:h-[50px]
        screen-size-15:py-0
        screen-size-15:pl-[80px]
        screen-size-15:pr-[60px]
        screen-size-15:items-center
        screen-size-15:justify-between
      "
    >
      <a
        href={address.path}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:underline text-lg font-semibold"
      >
        {address.page}
      </a>
      <div className="mt-3 screen-size-15:mt-0">
        <ul className="flex flex-wrap justify-center screen-size-15:justify-start items-center space-x-4">
          {pages.map((page) => (
            <li key={page.id}>
              <Link
                href={page.path || "/"}
                className="hover:underline text-sm text-gray-300"
              >
                {page.page}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterBottom;
