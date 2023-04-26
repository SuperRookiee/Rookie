import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../services/Spotify";
import { searchTracks } from "../store/slices/MusicSlice";
import Login from "../components/Login";
import styled from "styled-components";

const MusicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorContainer = styled.div`
  color: red;
`;

const Music = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { loading, error, tracks } = useSelector((state) => state.music);

  const params = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = params.get("access_token");
  

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
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Login />
          )}
        </>
      )}
    </MusicContainer>
  );
};

export default Music;
