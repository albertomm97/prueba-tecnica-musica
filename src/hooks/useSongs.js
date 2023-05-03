import { useState } from "react";

const API_URL = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";

const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${import.meta.env.VITE_RAPID_API_KEY}`,
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }
}

console.log(import.meta.env.VITE_RAPID_API_KEY)

export function useSongs({ query }) {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getSongs = () => {
    if (!query || query === "") return;

    const endpoint = `${API_URL}${query}`;
    setLoading(true);
    fetch(endpoint, OPTIONS)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error fetching songs");
        }
        return res.json();
      })
      .then((data) => {
        setSongs(data.data)
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { songs, getSongs, loading, error };
}
