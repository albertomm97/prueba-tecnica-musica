import { useState, useEffect } from "react";

export function useSearch() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    setQuery(query);

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
