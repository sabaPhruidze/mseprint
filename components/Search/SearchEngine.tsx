"use client";

import { useState, useCallback } from "react";
import SearchResults from "./SearchResults";
import { pagePathTypes } from "@/types/commonTypes";
import { Search } from "lucide-react";

interface GetSearchEngineProps {
  searchEngineData: pagePathTypes[];
}

const SearchEngine: React.FC<GetSearchEngineProps> = ({ searchEngineData }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<pagePathTypes[]>([]);

  const handleSearch = useCallback(() => {
    if (query.trim().length === 0) {
      setResults([]);
      return;
    }

    setResults(
      searchEngineData.filter((item) =>
        item.page.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, searchEngineData]);

  return (
    <div className="relative w-64">
      <div className="flex items-center border border-gray-300 rounded-md p-2 bg-white">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full outline-none text-black p-2"
        />
        <button onClick={handleSearch} className="p-2">
          <Search className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      {results.length > 0 && <SearchResults results={results} />}
    </div>
  );
};

export default SearchEngine;
