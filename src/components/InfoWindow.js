import React from "react";

export default function InfoWindow({
  InfoWindowShowing,
  setInfoWindowShowing,
}) {
  const handleClicks = (e) => {
    if (e.target.className === "info-window") {
      setInfoWindowShowing(false);
    }
  };

  return (
    <div onClick={(e) => handleClicks(e)}>
      {InfoWindowShowing ? (
        <div className="info-window">
          <div className="modal-window">
            <div className="info-main-header">How to use</div>
            <div className="section">
              <div className="info-main-body">
                You can either search for an artist and make a playlist based
                off of the related artists, or you can use your own recently
                played artists and songs.
              </div>
              <div className="info-header">
                Make playlist from most played artists
              </div>
              <div className="image-text-container">
                <div className="info-subheader">
                  Click the blue check box on the bottom right of the container
                  to open up the make playlist dialog.
                </div>
              </div>
            </div>
            <div className="section">
              <div className="info-header">
                Make playlist from most played songs
              </div>

              <div className="image-text-container">
                <div className="info-subheader">
                  Select the song or songs that you want to base your playlist
                  off by selecting them. Once selected, a "create playlist"
                  button will appear. Each selection will add 20 new songs to
                  the playlist.
                </div>
              </div>
              <button
                className="button-primary"
                onClick={() => setInfoWindowShowing(false)}
                style={{ marginTop: "15px" }}
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
