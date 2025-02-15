"use client";

import Link from "next/link";
import { pagePathTypes } from "@/types/commonTypes";
interface SearchResultsProps {
  results: pagePathTypes[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <ul className="absolute mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-full">
      {results.map((result) => (
        <li key={result.id} className="p-2 hover:bg-gray-100">
          <Link href={result.path || "/"} className="block w-full">
            {result.page}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
