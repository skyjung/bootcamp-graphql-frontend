import React, { useState } from "react";
import { Input, Loader } from "semantic-ui-react";

export default function SliderWindow({
  getTopSongsSimilarArtists,
  sliderWindowOpen,
  setSliderWindowOpen,
  errorMessage,
  setErrorMessage,
}) {
  const [playlistName, setPlaylistName] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <div
      className={`slider-container ${sliderWindowOpen ? "slider-open" : ""}`}
    >
      <div className="controls-before">
        <h2>Please name playlist</h2>
        <Input
          fluid
          placeholder="Playlist name"
          size="medium"
          value={inputValue}
          onChange={(e) => {
            setPlaylistName(e.target.value);
            setInputValue(e.target.value);
          }}
        />
        {errorMessage ? (
          <div className="error-message">Please enter name</div>
        ) : null}
        <div className="btn-container">
          <button
            className={"btn success"}
            onClick={() => {
              if (playlistName) {
                getTopSongsSimilarArtists(playlistName);
                setSliderWindowOpen(false);
                setInputValue("");
                setErrorMessage(false);
              } else {
                setErrorMessage(true);
              }
            }}
          >
            Make Playlist
          </button>
          <button
            className={"btn cancel"}
            onClick={() => {
              setSliderWindowOpen(false);
              setInputValue("");
              setErrorMessage(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
