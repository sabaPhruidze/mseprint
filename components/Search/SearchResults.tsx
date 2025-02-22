"use client";

import Link from "next/link";
import { PagePathTypes } from "../../types/commonTypes";

interface SearchResultsProps {
  results: PagePathTypes[];
  onReset: () => void;
  ariaLabel?: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  onReset,
  ariaLabel = "Search results",
}) => {
  if (!results || results.length === 0) return null;

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className="
        absolute
        w-full
        z-50
      "
    >
      <ul
        className="
          bg-white
          border
          border-gray-200
          rounded-lg
          shadow-lg
          w-full
          max-h-40
          overflow-y-auto
          scroll-smooth
          
          /* Custom Scrollbar Styles */
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-track]:rounded-r-lg
          [&::-webkit-scrollbar-thumb]:bg-gray-300
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb:hover]:bg-gray-400
          
          /* Firefox */
          scrollbar-width-thin
          scrollbar-color-gray-300
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
              onClick={onReset}
              title={`Navigate to ${result.page}`}
            >
              <span className="line-clamp-1">{result.page}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
