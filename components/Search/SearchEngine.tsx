"use client";

import { useState, useCallback, useMemo } from "react";
import SearchResults from "./SearchResults";
import { ServicesPathTypes } from "../../types/commonTypes";
import { Search } from "lucide-react";

interface GetSearchEngineProps {
  searchEngineData: ServicesPathTypes[];
}

const SearchEngine: React.FC<GetSearchEngineProps> = ({ searchEngineData }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ServicesPathTypes[]>([]);
  const listId = useMemo(() => "site-search-results", []);

  const handleSearch = useCallback(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      setResults([]);
      return;
    }
    setResults(
      searchEngineData.filter((item) => item.title.toLowerCase().includes(q))
    );
  }, [query, searchEngineData]);

  const handleReset = useCallback(() => {
    setResults([]);
  }, []);

  return (
    <div className="relative screen-size-23:w-96 screen-size-13:w-80 w-[350px] screen-size-13:mt-0 mt-5">
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="flex items-center border border-gray-300 rounded-md p-4 bg-white screen-size-23:h-16 h-14"
      >
        <label htmlFor="site-search" className="sr-only">
          Search the site
        </label>
        <input
          id="site-search"
          name="q"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search…"
          className="w-full h-full outline-none text-black p-3 text-xl"
          aria-label="Search the site"
          aria-controls={listId}
          aria-expanded={results.length > 0}
          autoComplete="off"
        />
        <button type="submit" className="p-3" aria-label="Search">
          <Search
            className="h-5 w-5 text-gray-500"
            aria-hidden="true"
            focusable="false"
          />
        </button>
      </form>

      {results.length > 0 && (
        <SearchResults
          results={results}
          onReset={handleReset}
          listId={listId}
        />
      )}
    </div>
  );
};

export default SearchEngine;
