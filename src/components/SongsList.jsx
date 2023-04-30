import { Song } from "./Song";

export function SongList ({ songs }) {
  const hasSongs = songs.length !== 0;

  return (
    hasSongs ? (
      <ul>
      {
        songs.map((song) => (
          <Song key={song.id} song={song} />
        ))
      } 
      </ul>
    ) : (
      <p>There is no songs for that query</p>
    )
  )
}