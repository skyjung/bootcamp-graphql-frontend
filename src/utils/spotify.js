const clientId = "a32e679ba97e4ccbaade8a974348a243";
const redirectUri = "http://localhost:3000/";
const client_secret = "d4edcdbcf2534c22989f52bc4edff613"
let token;
var request = require('request'); // "Request" library
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(clientId + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/users',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      console.log(body);
    });
  }
});

const Spotify = {
  getToken() {
    if (token) {
      console.log(token);
      return token;
    }

    const newtoken = window.location.href.match(/access_token=([^&]*)/);
    const newExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
    if (newtoken && newExpiresIn) {
      token = newtoken[1];
      const expiresIn = Number(newExpiresIn[1]);
      window.setTimeout(() => (token = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      console.log(token);
      return token;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=user-read-recently-played user-top-read playlist-modify-public&show_dialog=true&redirect_uri=${redirectUri}`;
      console.log(token);
      window.location = accessUrl;
    }
  },
  searchArtists(searchTerm) {
    const token = Spotify.getToken();
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return fetch(
      `https://api.spotify.com/v1/search?q=${searchTerm}&type=artist`,
      {
        headers: headers,
      }
    )
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
        //   throw new Error("Request failed!");
        // },
        // (networkError) => {
        //   console.log(networkError.message);
        }
      )
      .then((jsonResponse) => {
        return jsonResponse;
      });
  },

  getSimilarArtists(id) {
    const token = Spotify.getToken();
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return fetch(`https://api.spotify.com/v1/artists/${id}/related-artists`, {
      headers: headers,
    })
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
        //   throw new Error("Request failed!");
        // },
        // (networkError) => {
        //   console.log(networkError.message);
        }
      )
      .then((jsonResponse) => {
        return jsonResponse;
      });
  },
  getTopSongs(id) {
    const token = Spotify.getToken();
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return fetch(
      `https://api.spotify.com/v1/artists/${id}/top-tracks?market=ES`,
      {
        headers: headers,
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        //   throw new Error("Request failed!");
        // },
        // (networkError) => {
        //   console.log(networkError.message);
      })
      .then((jsonResponse) => {
        // console.log(jsonResponse);
        let filteredResponse = jsonResponse.tracks.map((track) => ({
          uri: track.uri,
        }));
        return filteredResponse.slice(0, 4);
      });
  },

  getUsersTopArtists() {
    const token = Spotify.getToken();
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return fetch(
      // ` https://api.spotify.com/v1/me/top/artists`,
      ` https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=30&offset=0`,

      {
        headers: headers,
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        //     throw new Error("Request failed!");
        //   },
        //   (networkError) => {
        //     console.log(networkError.message);
      })
      .then((jsonResponse) => {
        return jsonResponse.items;
      });
  },
  getUsersTopTracks() {
    const token = Spotify.getToken();
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return fetch(
      ` https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=30&offset=0`,

      {
        headers: headers,
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        //   throw new Error("Request failed!");
        // },
        // (networkError) => {
        //   console.log(networkError.message);
      })
      .then((jsonResponse) => {
        console.log(jsonResponse, "TOP SONGS");
        return jsonResponse.items;
      });
  },

  getMyDetails() {
    const token = Spotify.getToken();
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return fetch("https://api.spotify.com/v1/me", { headers: headers }).then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
        //throw new Error("Request failed!");
      //},
      //(networkError) => {
        //console.log(networkError.message);
      }
    );
  },

  makePlaylistFromArtistAndSong(songId) {
    const token = Spotify.getToken();
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return fetch(
      `https://api.spotify.com/v1/recommendations?seed_tracks=${songId}`,
      { headers: headers }
    ).then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
      //   throw new Error("Request failed!");
      // },
      // (networkError) => {
      //   console.log(networkError.message);
      }
    );
  },
  savePlaylist(playlistName, trackURIs) {
    if (playlistName && trackURIs.length) {
      const token = Spotify.getToken();
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      let userID;
      let playlistID;
      return fetch("https://api.spotify.com/v1/me", { headers: headers })
        .then(
          (response) => {
            if (response.ok) {
              return response.json();
            }
          //   throw new Error("Request failed!");
          // },
          // (networkError) => {
          //   console.log(networkError.message);
          }
        )
        .then((jsonResponse) => {
          userID = jsonResponse.id;
          return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ name: playlistName }),
          })
            .then(
              (response) => {
                if (response.ok) {
                  return response.json();
                }
                throw new Error("Request failed!");
              },
              (networkError) => {
                console.log(networkError.message);
              }
            )
            .then((jsonResponse) => {
              playlistID = jsonResponse.id;
              return fetch(
                `https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,
                {
                  method: "POST",
                  headers: headers,
                  body: JSON.stringify({ uris: trackURIs }),
                }
              )
                .then(
                  (response) => {
                    if (response.ok) {
                      return response.json();
                    }
                    throw new Error("Request failed!");
                  },
                  (networkError) => {
                    console.log(networkError.message);
                  }
                )
                .then((jsonResponse) => jsonResponse);
            });
        });
    } else {
      return;
    }
  },
};

export default Spotify;
