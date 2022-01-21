import React from "react";

export default function Login() {
  const clientId = "a32e679ba97e4ccbaade8a974348a243";
  const redirectUri = "http://localhost:3000/";
  let accessToken;

  const loginToSpotify = () => {
    if (accessToken) {
      console.log(accessToken);
      return accessToken;
    }
    const newAccessToken = window.location.href.match(/access_token=([^&]*)/);
    const newExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
    if (newAccessToken && newExpiresIn) {
      accessToken = newAccessToken[1];
      const expiresIn = Number(newExpiresIn[1]);
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      console.log(accessToken);

      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=user-read-recently-played user-top-read playlist-modify-public&show_dialog=true&redirect_uri=${redirectUri}`;
      console.log(accessToken);

      window.location = accessUrl;
    }
    return;
  };

  return (
    <div className="login">
      <div className="main-login-wrapper">
        <div className="login-btn-container">
          <img className="logo" src="/soundbytes-logo.svg" alt="" />
          <button className="login-btn" onClick={loginToSpotify}>
            Enter App
          </button>
          <p className="login-body-text">
            Welcome to soundbytes. We use the Spotify API to help you make
            playlists based off your listening habits. Once you've entered the
            site and logged into your spotify account, you'll be able to make
            custom playlists and send them straight to your spotify account.
          </p>
        </div>
      </div>
    </div>
  );
}
