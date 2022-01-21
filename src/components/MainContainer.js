import React from "react";

import ResultsContainer from "./ResultsContainer";
import SearchInput from "./SearchInput";

export default function MainContainer({
  menuOpen,
  searchHandler,
  searchArtists,
  searchResults,
  getSimilarArtists,
}) {
  return (
    <div className={`main-container ${menuOpen ? "" : "no-margin"}`}>
      <div className="container">
        <div className="main-header">Search Artist </div>

        <div
          className="main-image-wrapper"
        ></div>
        <SearchInput
          searchHandler={searchHandler}
          searchArtists={searchArtists}
        />
        <ResultsContainer
          searchResults={searchResults}
          getSimilarArtists={getSimilarArtists}
        />
      </div>
    </div>
  );
}
