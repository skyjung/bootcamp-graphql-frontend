import React, { useState } from "react";
import { Input, Loader } from "semantic-ui-react";

export default function SliderWindowBottom({
  sliderWindowBottomOpen,
  setSliderWindowBottomOpen,
  makePlaylistFromSong,
  errorMessageBottom,
  setErrorMessageBottom,
}) {
  const [playlistName, setPlaylistName] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <div
      className={`slider-container ${
        sliderWindowBottomOpen ? "slider-open" : ""
      }`}
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
        {errorMessageBottom ? (
          <div className="error-message">Please enter name</div>
        ) : null}
        <div className="btn-container">
          <button
            className={"btn success"}
            onClick={() => {
              if (playlistName) {
                makePlaylistFromSong(playlistName);
                setSliderWindowBottomOpen(false);
                setInputValue("");
                setErrorMessageBottom(false);
              } else {
                setErrorMessageBottom(true);
              }
            }}
          >
            Make Playlist
          </button>
          <button
            className={"btn cancel"}
            onClick={() => {
              setSliderWindowBottomOpen(false);
              setInputValue("");
              setErrorMessageBottom(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
