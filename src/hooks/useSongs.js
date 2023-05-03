import { useState, useRef } from "react";

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

  console.log('useSongs', songs);

  const getSongs = () => {
    if (!query || query === "" || previousSearch.current === query) {
      return;
    }

    console.log('call to getSongs()');

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
  };

  const sortedSongs = sort ? 
  [...songs].sort((a, b) => {
    return b.rank - a.rank;
  }) : songs;

  return { songs: sortedSongs, getSongs, loading, error };
}
