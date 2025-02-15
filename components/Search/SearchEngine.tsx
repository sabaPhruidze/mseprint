"use client";

import { useState, useCallback } from "react";
import SearchResults from "./SearchResults";
import { pagePathTypes } from "@/types/commonTypes";
import { Search } from "lucide-react";

interface GetSearchEngineProps {
  searchEngineData: pagePathTypes[]; // ✅ Using searchEngineData from props
}

const SearchEngine: React.FC<GetSearchEngineProps> = ({ searchEngineData }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<pagePathTypes[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(() => {
    if (query.trim().length === 0) {
      setResults([]);
      return;
    }

    setLoading(true);

    const filteredResults = searchEngineData.filter((item) =>
      item.page.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults);
    setLoading(false);
  }, [query, searchEngineData]);

  return (
    <div className="relative w-full max-w-md">
      <div className="flex items-center border border-gray-300 rounded-lg p-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full outline-none p-2"
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
