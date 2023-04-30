import "./App.css";

import { SongList } from "./components/SongsList";
import { useSongs } from "./hooks/useSongs";
import { useSearch } from "./hooks/useSearch";

function App() {
  const { songs } = useSongs();
  const { query, setQuery, error } = useSearch("");

  const handleChange = (event) => {
    const userQuery = event.target.value;
    setQuery(userQuery);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>
        <SongList songs={songs} />
      </main>
    </div>
  );
}

export default App;
