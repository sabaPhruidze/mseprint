import React, { FC } from "react";
import { pagePathTypes } from "../../types/commonTypes";
import Link from "next/link";

interface GetRequestQuoteSendAFileProps {
  rqsafData: pagePathTypes[];
}

const GetHeaderRQSF: FC<GetRequestQuoteSendAFileProps> = ({ rqsafData }) => {
  return (
    <nav
      className="
        w-full h-12 bg-purple flex items-center screen-size-13:justify-end justify-center px-4 
      "
      role="navigation"
      aria-label="Request a Quote and Order Navigation"
    >
      {rqsafData.map((item) => (
        <Link
          key={item.id}
          href={item.path || "/"}
          prefetch
          className="
            text-white
            border
            border-white
            rounded-lg
            px-4
            py-2
            mx-2
            no-underline
            hover:bg-white
            hover:text-black
            hover:border-0
            focus:scale-95
            transition-all
            duration-500
            font-inter-extrabold
          "
          aria-label={`Navigate to ${item.page}`}
        >
          {item.page}
        </Link>
      ))}
    </nav>
  );
};

export default GetHeaderRQSF;
