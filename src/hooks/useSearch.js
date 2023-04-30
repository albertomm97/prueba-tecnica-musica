import { useState, useEffect, useRef } from "react";

export function useSearch() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === "";
      return;
    }

    if (query === "") {
      setError("Empty query");
      return;
    }

    if (query.length < 4) {
      setError("Query should have 4 or more characters");
      return;
    }

    setError("");
  }, [query]);

  return { query, setQuery, error };
}
