import { useState, useEffect, useRef } from "react";

export function useSearch() {
  const [query, setQuery] = useState("");
  const [queryError, setQueryError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === "";
      return;
    }

    if (query === "") {
      setQueryError("Empty query");
      return;
    }

    if (query.length < 4) {
      setQueryError("Query should have 4 or more characters");
      return;
    }

    setQueryError(null);
  }, [query]);

  return { query, setQuery, queryError };
}
