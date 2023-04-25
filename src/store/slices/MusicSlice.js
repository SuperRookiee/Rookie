import { createSlice } from "@reduxjs/toolkit";
import { getAccessToken } from "../../services/Spotify";

const initialState = {
  tracks: [],
  loading: false,
  error: null,
};

export const MusicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setTracks: (state, action) => {
      state.tracks = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const { setTracks, setLoading, setError, setAccessToken } = MusicSlice.actions;

export const searchTracks = ({ search, token }) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${search}&type=track`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const { tracks } = await response.json();
    dispatch(setTracks(tracks.items));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

export const fetchTracks = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const token = await getAccessToken();
    const response = await fetch(
      `https://api.spotify.com/v1/me/tracks?limit=50`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const { items } = await response.json();
    dispatch(setTracks(items));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

export default MusicSlice.reducer;