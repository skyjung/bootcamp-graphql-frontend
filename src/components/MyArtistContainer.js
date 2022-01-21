import React, { useState } from "react";
import FavoriteArtistContainer from "./FavoriteArtistContainer";
import FavoriteTracksContainer from "./FavoriteTracksContainer";

export default function MyArtistsContainer({
  menuOpen,
  myFavoriteArtists,
  myFavoriteTracks,
  getSimilarArtists,
  setUsesTools,
  getSimilarSongsRecomendations,
  setSliderWindowBottomOpen,
  setSliderWindowOpen,
  usesTools,
  updateUsesTools,
}) {
  const [artistsShowing, setArtistShowing] = useState(true);

  return (
    <div className={`main-container ${menuOpen ? "" : "no-margin"}`}>
      <div
        className={`favorite-add-btn-sticky-btm ${
          usesTools.length > 0 ? "" : "hidden"
        }`}
      >
        <div>
          <button
            className="button-primary"
            onClick={() => setSliderWindowBottomOpen(true)}
          >
            MAKE PLAYLIST
          </button>
        </div>
      </div>
      <div className="container">
        <div className="main-header">Recent Favorites</div>
        <div
          className="main-image-wrapper"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7, 176, 242, 0.3), rgba(7, 176, 242, 0.3)), url('/dj.jpg')",
            backgroundBlendMode: "darken",
            backgroundPosition: "top",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="btn-wrapper"></div>

        <div className="selector-words-container flex-horizontal-spaced">
          <div className="selector-word-wrapper">
            <div
              className={`selector-word ${artistsShowing ? "active" : ""}`}
              onClick={() => {
                setArtistShowing(true);
                setSliderWindowBottomOpen(false);
                setSliderWindowOpen(false);
                setUsesTools([]);
              }}
            >
              Artists
            </div>
            <div
              className={`selector-word ${artistsShowing ? "" : "active"}`}
              onClick={() => {
                setArtistShowing(false);
                setSliderWindowBottomOpen(false);
                setSliderWindowOpen(false);
                setUsesTools([]);
              }}
            >
              Songs
            </div>
          </div>
        </div>
        {artistsShowing ? (
          <FavoriteArtistContainer
            myFavoriteArtists={myFavoriteArtists}
            getSimilarArtists={getSimilarArtists}
          />
        ) : (
          <FavoriteTracksContainer
            key={myFavoriteArtists.artist}
            myFavoriteTracks={myFavoriteTracks}
            getSimilarSongsRecomendations={getSimilarSongsRecomendations}
            //

            usesTools={usesTools}
            updateUsesTools={updateUsesTools}
          />
        )}
      </div>
    </div>
  );
}
