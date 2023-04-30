import { Song } from "./Song";

export function SongList({ songs }) {
  const hasSongs = songs.length !== 0;

  return hasSongs ? (
    <ul className="songs">
      {songs.map((song) => (
        <Song className="song" key={song.id} song={song} />
      ))}
    </ul>
  ) : (
    <p>There is no songs for that query</p>
  );
}
