const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;

export const getTokenFromResponse = (hash) => {
  const stringAfterHash = hash.substring(1);
  const paramsInUrl = stringAfterHash.split("&");
  const paramsSplitUp = paramsInUrl.reduce((accum, current) => {
    const [key, value] = current.split("=");
    accum[key] = value;
    return accum;
  }, {});
  return paramsSplitUp;
};

export const getAccessToken = async () => {
  const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "playlist-modify-public",
    "playlist-read-private",
    "playlist-modify-private",
    "user-library-modify",
    "user-library-read",
  ];
  const redirectUrlAfterLogin = `${window.location.origin}${redirectUri}`;
  const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrlAfterLogin}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;

  const popupWindow = window.open(loginUrl, "_blank", "width=800,height=600");

  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      try {
        if (popupWindow.location.href.includes(redirectUrlAfterLogin)) {
          const hash = popupWindow.location.hash;
          popupWindow.close();
          const token = getTokenFromResponse(hash).access_token;
          resolve(token);
          clearInterval(interval);
        }
      } catch (error) {
        // console.log(error);
      }
    }, 1000);
  });
};

export const setAccessToken = (accessToken) => {
  localStorage.setItem("accessToken", accessToken);
};

export const searchTracksApi = async (token, query) => {
  const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.tracks.items;
};