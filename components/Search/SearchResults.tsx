"use client";

import Link from "next/link";
import { pagePathTypes } from "@/types/commonTypes";

interface SearchResultsProps {
  results: pagePathTypes[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <ul
      className="absolute bg-white border border-gray-300 rounded-lg shadow-lg w-full max-h-32 overflow-y-auto
                 scrollbar-thin scrollbar-thumb-purple scrollbar-track-darkGray"
    >
      {results.slice(0, 5).map((result, index) => (
        <li
          key={result.id}
          className={`p-4 hover:bg-purple text-black hover:text-white ${
            index !== 0 ? "border-t border-darkGray" : ""
          }`}
        >
          <Link href={result.path || "/"} className="block w-full h-full">
            {result.page}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
