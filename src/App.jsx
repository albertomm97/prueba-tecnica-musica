import './App.css';
import { SongList } from './components/SongsList';

import results from './mocks/results.json';

function App() {
  const songs = results.data;

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
        <SongList songs={songs} />
      </main>
    </div>
  )
}

export default App
