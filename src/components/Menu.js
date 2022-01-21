import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Menu({
  setSliderWindowBottomOpen,
  menuOpen,
  setSliderWindowOpen,
  setSearchPageShowing,
  myDetails,
  setMenuOpen,
  setErrorMessage,
  setErrorMessageBottom,
  setInfoWindowShowing,
}) {
  const [btnActive, setBtnActive] = useState("favorite");

  return (
    <div className={`sidemenu ${menuOpen ? "active-menu" : ""}`}>
      <img src="/soundbytes-logo.svg" alt="" className="menu-logo" />
      <div className="button-wrapper">
        <div
          className="icon-btn-wrapper"
          onClick={() => {
            setSearchPageShowing(true);
            setSliderWindowOpen(false);
            setSliderWindowBottomOpen(false);
            setBtnActive("search");
            setMenuOpen(window.innerWidth < 768 ? false : true);
            setErrorMessage(false);
            setErrorMessageBottom(false);
          }}
        >
          <Icon
            name="search"
            size="big"
            className={`icon-btn ${
              btnActive === "search" ? "btn-active-icon" : ""
            }`}
          />
          <div className="btn-text">Search Artists</div>
        </div>
        <div
          className="icon-btn-wrapper"
          onClick={() => {
            setSearchPageShowing(false);
            setSliderWindowOpen(false);
            setSliderWindowBottomOpen(false);
            setBtnActive("favorite");
            setMenuOpen(window.innerWidth < 768 ? false : true);
            setErrorMessage(false);
            setErrorMessageBottom(false);
          }}
        >
          <Icon
            name="favorite"
            size="big"
            className={`icon-btn ${
              btnActive === "favorite" ? "btn-active-icon" : ""
            }`}
          />
          <div className="btn-text">Favorite Artists</div>
        </div>

        <div className="profile-container">
          <div
            className="icon-btn-wrapper"
            onClick={() => setInfoWindowShowing(true)}
          >
            <Icon name="question" size="big" className="icon-btn" />
            <div className="btn-text">How to use</div>
          </div>
          {/* {myDetails.display_name ? (
            <>
              <div className="my-profile-name">
                Logged in as {myDetails.display_name}
              </div>
            </>
          ) : null} */}
          <div className="div">
            <Link to="/login">
              <button className="button-small" style={{ marginTop: "10px" }}>
                Logout
              </button>
            </Link>
            <a
              href="https://github.com/balthazarely/react-spotify-playlistMaker"
              target="BLANK"
            >
              <Icon
                name="github"
                className="github-link"
                size="large"
                color="black"
                style={{ marginLeft: "10px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
