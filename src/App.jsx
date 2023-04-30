import './App.css';

import results from './mocks/results.json';

function App() {
  const songs = results.data;
  const hasSongs = results.total > 0;

  return (
    <div className='app'>
      <h1>Search music!</h1>
      <header>
        <form className='form'>
          <input placeholder='Eminem, Julio Iglesias...' />
          <button type='submit'>Search</button>
        </form>
      </header>
      <main>
        {
          hasSongs
            ? (
              <ul>
              {
                songs.map((song) => (
                  <li key={song.id}>
                    <h3>{song.title}</h3>
                    <img src={song.album.cover_medium} alt={song.album.title} />
                    <audio src={song.preview} />
                  </li>
                ))
              } 
              </ul>
            )
          : (
            <p>There is no songs for that query</p>
          )
        }
      </main>
    </div>
  )
}

export default App
