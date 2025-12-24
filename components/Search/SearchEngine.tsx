"use client";

import {
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Search, X } from "lucide-react";
import SearchResults from "./SearchResults";
import { ServicesPathTypes } from "../../types/commonTypes";

interface GetSearchEngineProps {
  searchEngineData: ServicesPathTypes[];
}

const SearchEngine: React.FC<GetSearchEngineProps> = ({ searchEngineData }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const deferredQuery = useDeferredValue(query);

  const results = useMemo(() => {
    const needle = deferredQuery.trim().toLowerCase();
    if (!needle) return [];
    return searchEngineData.filter((x) =>
      x.title.toLowerCase().includes(needle)
    );
  }, [deferredQuery, searchEngineData]);

  const clear = useCallback(() => {
    setQuery("");
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && clear();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [clear]);

  const showResults = isOpen && deferredQuery.trim() && results.length > 0;

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
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
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
