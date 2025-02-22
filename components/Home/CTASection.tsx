import React, { FC } from "react";
import { PagePathTypes } from "../../types/commonTypes";
import Link from "next/link";

interface CTASectionProps {
  rqsafData: PagePathTypes[];
}

const CTASection: FC<CTASectionProps> = ({ rqsafData }) => {
  return (
    <nav
      className="
       my-[50px] w-full h-20 bg-gray-300 flex items-center justify-center px-4
      "
      role="navigation"
      aria-label="Call To Action Navigation"
    >
      {rqsafData.map((item) => (
        <Link
          key={item.id}
          href={item.path || "/"}
          prefetch
          className="
            bg-red
            text-white
            border-2
            border-red
            rounded-full
            px-6
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
          "
          aria-label={`Navigate to ${item.page}`}
        >
          {item.page}
        </Link>
      ))}
    </nav>
  );
};

export default CTASection;
