import React from "react";
import { Grid, Image, Icon } from "semantic-ui-react";

export default function FavoriteArtistCard({
  artist,
  getSimilarArtists
}) {
  return (
    <Grid.Column>
      <div
      className="favorite-wrapper">
        <Image
          className="favorite-image-wrapper"
          src={artist.images.length > 0 ? artist.images[1].url : null}
        />
        <div className="artist-name-bg"></div>
        <div className="artist-name">{artist.name}</div>
        <Icon
          className="artist-play-icon"
          size="large"
          name="check circle outline"
          onClick={() => getSimilarArtists(artist.id)}
        />
      </div>
    </Grid.Column>
  );
}
