import { useState, useRef, useMemo, useCallback } from "react";

const API_URL = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";

const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${import.meta.env.VITE_RAPID_API_KEY}`,
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }
}

export function useSongs({ query, sort }) {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(null);

  const getSongs = useCallback(async ({ query }) => {
    if (!query || query === "" || previousSearch.current === query) {
      return;
    }

    const endpoint = `${API_URL}${query}`;
    setLoading(true);
    fetch(endpoint, OPTIONS)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error.message);
        } else {
          setError(null);
          previousSearch.current = query;
          setSongs(data.data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const sortedSongs = useMemo(() => {
    return sort ? 
    [...songs].sort((a, b) => {
      return b.rank - a.rank;
    }) : songs;
  }, [songs, sort])

  return { songs: sortedSongs, getSongs, loading, error };
}
