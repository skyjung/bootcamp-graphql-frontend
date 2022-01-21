import React from "react";
import { Label } from "semantic-ui-react";

export default function SingleResult({ artist, index, getSimilarArtists }) {
  return (
    <div className={"result-container"}>
      <index className="index-wrapper">
        <div>{index}</div>
      </index>
      <img
        className="image-wrapper"
        src={artist.images.length > 0 ? artist.images[1].url : null}
        alt="artist-image"
      />
      <div className="text-wrapper">
        <div className="header">{artist.name}</div>
        <div className="genre-wrapper">
          {artist.genres.slice(0, 3).map((genre) => {
            return <Label size="tiny">{genre}</Label>;
          })}
        </div>
      </div>
      <div className="btn-wrapper">
        <button onClick={() => getSimilarArtists(artist.id)}>
          Make Playlist
        </button>
      </div>
    </div>
  );
}
