import React, { FC } from "react";
import { PagePathTypes } from "../../types/commonTypes";
import Link from "next/link";

interface CTASectionProps {
  rqsafData: PagePathTypes[];
}

const CTASection: FC<CTASectionProps> = ({ rqsafData }) => {
  if (!rqsafData || rqsafData.length === 0) return null;

  return (
    <nav
      className="my-[50px] w-full h-20 bg-gray-300 flex items-center justify-center px-4"
      role="navigation"
      aria-label="Call To Action Navigation"
    >
      <ul className="flex flex-row items-center justify-center">
        {rqsafData.map((item) => (
          <li key={item.id}>
            <Link
              href={item.path || "/"}
              prefetch
              className="
                bg-red
                text-white
                border-2
                border-red
                rounded-full
                px-2
                py-3
                mx-2
                font-inter-extrabold
                transition-all
                duration-300
                hover:bg-red-700
                hover:border-red-700
                focus:scale-95
                text-center
                hover:scale-105
                screen-size-4:px-6
              "
              aria-label={`Navigate to ${item.page}`}
            >
              {item.page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CTASection;
