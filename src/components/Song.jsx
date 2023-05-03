export function Song({ song }) {
  return (
    <li key={song.id}>
      <a href={`${song.link}`} target="_blank">
        <h3>{song.title}</h3>
        <img src={song.album.cover_medium} alt={song.album.title} />
        <audio src={song.preview} />
      </a>
    </li>
  );
}
