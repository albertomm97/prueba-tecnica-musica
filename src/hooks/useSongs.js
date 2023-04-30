import { useState } from "react";

const API_URL = "https://api.deezer.com/search?q=";

export function useSongs({ query }) {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getSongs = () => {
    if (!query || query === "") return;

    const endpoint = `${API_URL}${query}`;
    setLoading(true);
    fetch(endpoint)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error fetching songs");
        }
        return res.json();
      })
      .then((data) => setSongs(data))
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return { songs, getSongs, loading, error };
}
