import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const getAuth = createAsyncThunk("MusicSlice/getAuth", async (payload, { rejectWithValue }) => {
    let result = null;
    const client_id = process.env.REACT_APP_CLIENT_ID;
    const client_secret = process.env.REACT_APP_CLIENT_SECRET;
    const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
    const api_uri = "https://accounts.spotify.com/authorize";
    const auth = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

    try {
        const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Basic ' + auth
            },
            auth: {
                username: client_id,
                password: client_secret,
            }
        });
        window.localStorage.setItem('token', response.data.access_token);
        window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token&show_dialog=true`;
        
        result = response.data.access_token;
    } catch (err) {
        result = rejectWithValue(err.response);
    }
    return result;
});

const MusicSlice = createSlice({
    name: 'MusicSlice',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    extraReducers: {
        [getAuth.pending]: (state, { payload }) => {
            return { ...state, loading: true }
        },
        [getAuth.fulfilled]: (state, { payload }) => {
            return {
                data: payload, 
                loading: false,
                error: null
            }
        },
        [getAuth.rejected]: (state, { payload }) => {
            return {
                data: payload, 
                loading: false,
                error: payload
                // error: {
                //     code: payload.status ? payload.status : 500,
                //     message: payload.statusText ? payload.statusText : 'Server Error'
                // }
            }
        }
    },
});

export default MusicSlice.reducer;