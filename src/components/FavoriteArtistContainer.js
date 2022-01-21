import React from "react";
import FavoriteArtistCard from "./FavoriteArtistCard";
import { Grid } from "semantic-ui-react";

export default function FavoriteArtistContainer({
  myFavoriteArtists,
  getSimilarArtists,
}) {
  console.log(myFavoriteArtists);
  return (
    <div>
      <Grid stackable columns={4} doubling>
        {myFavoriteArtists &&
          myFavoriteArtists.map((artist) => {
            return (
              <FavoriteArtistCard
                key={artist.id}
                artist={artist}
                getSimilarArtists={getSimilarArtists}
              />
            );
          })}
      </Grid>
    </div>
  );
}
