import React from "react";
import FavoriteTracksCard from "./FavoriteTracksCard";

export default function FavoriteTracksContainer({
  key,
  myFavoriteTracks,
  getSimilarSongsRecomendations,
  usesTools,
  updateUsesTools,
}) {
  return (
    <div className="favorite-songs-container">
      {myFavoriteTracks &&
        myFavoriteTracks.map((song, index) => {
          return (
            <FavoriteTracksCard
              key = {song + index}
              song={song}
              getSimilarSongsRecomendations={getSimilarSongsRecomendations}
              index={index}
              //
              usesTools={usesTools}
              updateUsesTools={updateUsesTools}
            />
          );
        })}
    </div>
  );
}
