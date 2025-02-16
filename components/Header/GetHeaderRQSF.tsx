import React, { FC } from "react";
import Link from "next/link";

/**
 * Header component with Request a Quote and Place an Order buttons
 */
const GetHeaderRQSF: FC = () => {
  return (
    <header
      className="
        w-full h-12 bg-purple flex items-center screen-size-13:justify-end justify-center px-4 
      "
    >
      {/* Request a Quote Link */}
      <Link
        href="/request-quote"
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
      >
        Request a Quote
      </Link>

      {/* Place an Order Link */}
      <Link
        href="/send-file"
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
      >
        Place an Order
      </Link>
    </header>
  );
};

export default GetHeaderRQSF;
