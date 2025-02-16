import React, { FC, useMemo } from "react";
import { pagePathTypes } from "@/types/commonTypes";
import Link from "next/link";

interface GetRequestQuoteSendAFileProps {
  rqsafData: pagePathTypes[];
}

const GetHeaderRQSF: FC<GetRequestQuoteSendAFileProps> = ({ rqsafData }) => {
  const links = useMemo(
    () =>
      rqsafData.map((item) => (
        <Link
          key={item.id}
          href={item.path || "/"}
          prefetch={false}
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
          "
          aria-label={`Navigate to ${item.page}`} // Improves accessibility for screen readers
        >
          {item.page}
        </Link>
      )),
    [rqsafData]
  );

  return (
    <nav
      className="
        w-full h-12 bg-purple flex items-center screen-size-13:justify-end justify-center px-4
      "
      role="navigation"
      aria-label="Request a Quote and Order Navigation"
    >
      {links}
    </nav>
  );
};

export default GetHeaderRQSF;
