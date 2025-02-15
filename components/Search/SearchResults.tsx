"use client";

import Link from "next/link";
import { pagePathTypes } from "@/types/commonTypes";

interface SearchResultsProps {
  results: pagePathTypes[];
  onReset: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, onReset }) => {
  if (!results || results.length === 0) return null;

  return (
    <ul
      className="
      absolute
      bg-white
      border
      border-gray-200
      rounded-lg
      shadow-lg
      w-full
      max-h-32
      overflow-y-auto
      no-scrollbar
      hover:scrollbar-thin
      transition-all
      duration-300
      [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-track]:rounded-r-lg
      [&::-webkit-scrollbar-thumb]:bg-purple-400
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:hover:bg-purple-500
    "
    >
      {results.slice(0, 5).map((result, index) => (
        <li
          key={result.id}
          className={`
            transition-colors
            duration-200
            hover:bg-purple
            text-gray-800
            hover:text-white
            ${index !== 0 ? "border-t border-gray-100" : ""}
          `}
        >
          <Link
            href={result.path || "/"}
            className="p-4 block w-full h-full"
            onClick={() => {
              // Reset results on link click
              onReset();
            }}
          >
            {result.page}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
