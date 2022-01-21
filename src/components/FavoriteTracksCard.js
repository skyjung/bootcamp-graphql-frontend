import React, { useState } from "react";
import { Icon, Checkbox } from "semantic-ui-react";

export default function FavoriteTracksCard({
  song,
  index,
  usesTools,
  updateUsesTools,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = (songID) => {
    // const tools = usesTools; //Array in parent component
    // const value = e.target.value; //Checkbox value
    updateUsesTools(songID);
  };
  return (
    <div key={song.id}
      className={`result-container ${isChecked ? "active-result" : ""}`}
      onClick={() => {
        checkHandler(song.id);
        setIsChecked(!isChecked);
      }}
    >
      <div className="index-wrapper">
        <div>{index + 1}</div>
      </div>
      <img
        className="image-wrapper"
        src={song.album.images.length > 0 ? song.album.images[1].url : null}
        alt="artist-image"
      />
      <div className="text-wrapper">
        <div className="header">{song.name}</div>
        <div className="artist-small-wrapper">
          {song.artists.slice(0, 3).map((song, index) => {
            return <span key={index}>{(index ? ", " : "") + song.name}</span>;
          })}
        </div>
      </div>
      <div className="checkbox-wrapper">
        {isChecked ? (
          <Icon name="check" size="large" style={{ color: "#90e784" }} />
        ) : null}
      </div>
    </div>
  );
}
