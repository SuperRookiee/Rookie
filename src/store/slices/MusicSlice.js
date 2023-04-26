import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tracks: [],
  loading: false,
  error: null,
  accessToken: null,
};

const MusicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    setTracks: (state, action) => {
      state.tracks = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});


export const { setTracks, setLoading, setError } = MusicSlice.actions;

export const searchTracks = ({ search }) => async (dispatch, getState) => {
  dispatch(setLoading(true));
  try {
    const token = getState().music.accessToken;
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

export const fetchTracks = () => async (dispatch, getState) => {
  dispatch(setLoading(true));
  try {
    const token = getState().music.accessToken;
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
