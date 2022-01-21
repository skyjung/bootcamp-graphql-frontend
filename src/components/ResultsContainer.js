import React from "react";
import SingleResult from "./SingleResult";

export default function ResultsContainer({
  searchResults,
  setArtist,
  getSimilarArtists,
}) {
  return (
    <div>
      {searchResults &&
        searchResults.map((artist, i) => {
          return (
            <SingleResult
              artist={artist}
              key={artist.id}
              index={i}
              setArtist={setArtist}
              getSimilarArtists={getSimilarArtists}
            />
          );
        })}
    </div>
  );
}
