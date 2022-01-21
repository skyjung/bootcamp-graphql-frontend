import React from "react";

export default function Playlist({ playlist }) {
  console.log(playlist);
  return (
    <div>
      {playlist &&
        playlist.map((song) => {
          return <div>{song.name}</div>;
        })}
    </div>
  );
}
