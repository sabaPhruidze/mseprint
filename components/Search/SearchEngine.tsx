"use client";

import { useState, useCallback } from "react";
import SearchResults from "./SearchResults";
import { ServicesPathTypes } from "../../types/commonTypes";
import { Search } from "lucide-react";

interface GetSearchEngineProps {
  searchEngineData: ServicesPathTypes[];
}

const SearchEngine: React.FC<GetSearchEngineProps> = ({ searchEngineData }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ServicesPathTypes[]>([]);

  const handleSearch = useCallback(() => {
    if (query.trim().length === 0) {
      setResults([]);
      return;
    }

    setResults(
      searchEngineData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, searchEngineData]);

  // A helper to reset results
  const handleReset = () => {
    setResults([]);
  };

  return (
    <div className="relative screen-size-23:w-96 screen-size-13:w-80 w-[350px] screen-size-13:mt-0 mt-5">
      <div className="flex items-center border border-gray-300 rounded-md p-4 bg-white screen-size-23:h-16 h-14">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full h-full outline-none text-black p-3 text-xl"
        />
        <button
          onClick={handleSearch}
          className="p-3"
          aria-label="Search" // <-- accessible name
        >
          <Search
            className="h-5 w-5 text-gray-500"
            aria-hidden="true" // hide the icon itself from SRs
            focusable="false"
          />
        </button>
      </div>
      {results.length > 0 && (
        <SearchResults results={results} onReset={handleReset} />
      )}
    </div>
  );
};

export default SearchEngine;
