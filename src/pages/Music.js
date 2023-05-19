import React, { useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../services/Spotify";
import { searchTracks } from "../store/slices/MusicSlice";
import TrackList from "../components/TrackList";
import Login from "../components/Login";
import styled from "styled-components";

const MusicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 20px;
`;

const SearchForm = styled.form`
  display: flex;
`;

const SearchInput = styled.input`
  padding: 5px;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  padding: 5px;
  background-color: #1db954;
  color: #fff;
  border: none;
`;

const ErrorContainer = styled.div`
  color: red;
`;

const Music = memo(() => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { loading, error, tracks } = useSelector((state) => state.music);

  const params = new URLSearchParams(window.location.hash.substring(1));

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search) return;
    const token = await getAccessToken();
    dispatch(searchTracks({ search, token }));
  };

  return (
    <MusicContainer>
      {error ? (
        <ErrorContainer>{error}</ErrorContainer>
      ) : (
        <>
          <Login />
          <SearchContainer>
            <SearchForm onSubmit={handleSearch}>
              <SearchInput
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for tracks"
              />
              <SearchButton type="submit">Search</SearchButton>
            </SearchForm>
          </SearchContainer>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TrackList tracks={tracks} />
          )}
        </>
      )}
    </MusicContainer>
  );
});

export default Music;
