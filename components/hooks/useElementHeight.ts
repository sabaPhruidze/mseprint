"use client";

import { RefObject, useEffect, useState } from "react";

export default function useElementHeight<T extends HTMLElement>(
  ref: RefObject<T | null>,
  deps: unknown[] = []
) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setHeight(el.offsetHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return height;
}
