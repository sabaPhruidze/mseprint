"use client";

import { useState, useCallback, useMemo } from "react";
import SearchResults from "./SearchResults";
import { ServicesPathTypes } from "../../types/commonTypes";
import { Search, X } from "lucide-react";

interface GetSearchEngineProps {
  searchEngineData: ServicesPathTypes[];
}

const SearchEngine: React.FC<GetSearchEngineProps> = ({ searchEngineData }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ServicesPathTypes[]>([]);
  const listId = useMemo(() => "site-search-results", []);

  const runSearch = useCallback(
    (q: string) => {
      const needle = q.trim().toLowerCase();
      if (!needle) {
        setResults([]);
        return;
      }
      setResults(
        searchEngineData.filter((item) =>
          item.title.toLowerCase().includes(needle)
        )
      );
    },
    [searchEngineData]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      runSearch(query);
    },
    [runSearch, query]
  );

  const handleClear = useCallback(() => {
    setQuery("");
    setResults([]);
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setQuery(val);
      // optional: live-search as they type (remove if you prefer on submit)
      runSearch(val);
    },
    [runSearch]
  );

  return (
    <div className="relative screen-size-23:w-96 screen-size-13:w-80 w-[350px] screen-size-13:mt-0 mt-5">
      <form
        role="search"
        onSubmit={handleSubmit}
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
          onChange={handleChange}
          placeholder="Search…"
          className="w-full h-full outline-none text-black p-3 text-xl"
          autoComplete="off"
        />

        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="p-3 mr-1 cursor-pointer"
            aria-label="Clear search"
            title="Clear"
          >
            <X className="h-5 w-5 text-gray-500" aria-hidden="true" />
          </button>
        )}

        <button
          type="submit"
          className="p-3 cursor-pointer"
          aria-label="Search"
        >
          <Search className="h-5 w-5 text-gray-500" aria-hidden="true" />
        </button>
      </form>

      {results.length > 0 && (
        <SearchResults
          results={results}
          onReset={handleClear}
          listId={listId}
        />
      )}
    </div>
  );
};

export default SearchEngine;
