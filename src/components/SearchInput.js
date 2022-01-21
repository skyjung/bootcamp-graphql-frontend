import React from "react";
import { Input, Button } from "semantic-ui-react";

export default function SearchInput({ searchHandler, searchArtists }) {
  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      searchArtists(e);
    }
  };

  return (
    <div className="input-wrapper">
      <Input
        className="input-search"
        placeholder="Search Artist..."
        size="medium"
        onChange={(e) => searchHandler(e)}
        fluid
        onKeyDown={(e) => handleEnterPress(e)}
      />
      {/* Might need button for moible */}
      {/* <Button onClick={(e) => searchArtists(e)}>Search</Button> */}
    </div>
  );
}
