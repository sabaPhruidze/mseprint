"use client";

import Link from "next/link";
import { ServicesPathTypes } from "../../types/commonTypes";
import { normalizeHref } from "src/helpers/urls";

interface SearchResultsProps {
  results: ServicesPathTypes[];
  onReset: () => void;
  ariaLabel?: string;
  listId?: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  onReset,
  ariaLabel = "Search results",
  listId = "site-search-results",
}) => {
  const uniqueResults = Array.from(
    new Map(
      results.map((item) => [item.title + "|" + item.path, item])
    ).values()
  );

  if (!uniqueResults.length) return null;

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className="absolute w-full z-50"
      aria-live="polite"
    >
      {/* Top row with a dismiss button */}
      <div className="flex justify-end bg-white border border-gray-200 border-b-0 rounded-t-lg">
        <button
          type="button"
          onClick={onReset}
          className="px-3 py-2 text-sm text-gray-600 hover:text-gray-800 cursor-pointer"
          aria-label="Hide search results"
          title="Hide results"
        >
          ×
        </button>
      </div>

      <ul
        id={listId}
        className="
          bg-white border border-gray-200 rounded-b-lg shadow-lg
          w-full max-h-40 overflow-y-auto scroll-smooth
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-track]:rounded-r-lg
          [&::-webkit-scrollbar-thumb]:bg-gray-300
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb:hover]:bg-gray-400
          [scrollbar-color:theme(colors.gray.300)_theme(colors.gray.100)]
          scrollbar-width-thin
        "
      >
        {uniqueResults.slice(0, 5).map((result, index) => (
          <li
            key={`${result.id}-${index}`}
            className={`
              transition-colors duration-200
              hover:bg-purple
              text-gray-800 hover:text-white
              ${index !== 0 ? "border-t border-gray-100" : ""}
            `}
          >
            <Link
              href={normalizeHref(result.path)}
              className="p-4 block w-full h-full"
              onClick={onReset}
              title={`Navigate to ${result.title}`}
            >
              <span className="line-clamp-1">{result.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
