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
      {/* Removed the extra X here to avoid duplicates */}
      <ul
        id={listId}
        role="listbox"
        className="
          bg-white border border-gray-200 rounded-lg shadow-lg
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
        {uniqueResults.slice(0, 5).map((result, index) => {
          const href = normalizeHref(result.path);
          return (
            <li
              key={`${result.id}-${index}`}
              role="option"
              className={`
                transition-colors duration-200
                hover:bg-purple text-gray-800 hover:text-white
                ${index !== 0 ? "border-t border-gray-100" : ""}
              `}
            >
              <Link
                href={href}
                className="p-4 block w-full h-full"
                onClick={onReset}
                title={`Open ${result.title} | MSE Printing`}
                aria-label={`Go to ${result.title}`}
              >
                {/* Good anchor text for SEO */}
                <span className="line-clamp-1">{result.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchResults;
