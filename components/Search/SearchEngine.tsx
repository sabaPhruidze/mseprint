"use client";

import React from "react";
import { Search, X } from "lucide-react";
import { ServicesPathTypes } from "../../types/commonTypes";
import SearchResults from "./SearchResults";
import useSiteSearch from "../hooks/useSiteSearch";

interface GetSearchEngineProps {
  searchEngineData: ServicesPathTypes[];
}

const SearchEngine: React.FC<GetSearchEngineProps> = ({ searchEngineData }) => {
  const { wrapperRef, query, results, showResults, onFocus, onChange, clear } =
    useSiteSearch(searchEngineData);

  return (
    <div
      ref={wrapperRef}
      className="relative screen-size-23:w-96 screen-size-13:w-80 w-[350px] screen-size-13:mt-0 mt-5"
    >
      <form
        role="search"
        onSubmit={(e) => e.preventDefault()}
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
          onFocus={onFocus}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search…"
          className="w-full h-full outline-none text-black p-3 text-xl"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck={false}
          enterKeyHint="search"
        />

        {query && (
          <button
            type="button"
            onClick={clear}
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
          title="Search"
        >
          <Search className="h-5 w-5 text-gray-500" aria-hidden="true" />
        </button>
      </form>

      {showResults && (
        <SearchResults
          results={results}
          onReset={clear}
          listId="site-search-results"
        />
      )}
    </div>
  );
};

export default SearchEngine;
