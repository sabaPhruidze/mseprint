"use client";

import { useCallback, useDeferredValue, useMemo, useRef, useState } from "react";
import { ServicesPathTypes } from "../../types/commonTypes";
import useOutsideClick from "../hooks/useOutsideClick";
import useEscapeKey from "../hooks/useEscapeKey";

export default function useSiteSearch(searchEngineData: ServicesPathTypes[]) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const deferredQuery = useDeferredValue(query);

  const results = useMemo(() => {
    const needle = deferredQuery.trim().toLowerCase();
    if (!needle) return [];
    return searchEngineData.filter((x) => x.title.toLowerCase().includes(needle));
  }, [deferredQuery, searchEngineData]);

  const clear = useCallback(() => {
    setQuery("");
    setOpen(false);
  }, []);

  useOutsideClick(wrapperRef, () => setOpen(false), open);
  useEscapeKey(clear, true);

  const onFocus = useCallback(() => setOpen(true), []);
  const onChange = useCallback((v: string) => {
    setQuery(v);
    setOpen(true);
  }, []);

  const showResults = open && deferredQuery.trim().length > 0 && results.length > 0;

  return { wrapperRef, query, results, showResults, onFocus, onChange, clear };
}
