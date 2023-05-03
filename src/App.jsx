import "./App.css";

import { useState } from "react";

import { SongList } from "./components/SongsList";
import { useSongs } from "./hooks/useSongs";
import { useSearch } from "./hooks/useSearch";

function App() {
  const [sort, setSort] = useState(false);
  const { query, setQuery, queryError } = useSearch();
  const { songs, getSongs, loading, error } = useSongs({ query, sort });

  const handleChange = (event) => {
    const userQuery = event.target.value;
    setQuery(userQuery);
  };

  const handleSortClick = () => {
    setSort(prev => !prev);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getSongs();
  };

  return (
    <div className="app">
      <h1>Search music!</h1>
      <header>
        <form className="form" onSubmit={handleSubmit}>
          <input
            value={query}
            onChange={handleChange}
            name="query"
            placeholder="Eminem, Julio Iglesias..."
          />
          <button type="submit">Search</button>
          <button onClick={handleSortClick}>Sort by rank</button>
        </form>
        {queryError && <p>{queryError}</p>}
      </header>
      <main>
        {error && <p>Error fetching songs</p>}
        {!error && loading && <p>Loading..</p>}
        {!error && !loading && <SongList songs={songs} />}
      </main>
    </div>
  );
}

export default App;
