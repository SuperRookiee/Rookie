import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MusicTrack from "./MusicTrack";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 2vh;
`;

const SuccessMessage = styled.p`
  color: black;
  margin-top: 50px;
`;

const LoginButton = styled.button`
  && {
    margin-top: 50px;
    padding: 15px;
    background-color: #1db954;
    color: white;
    font-weight: 800;

    &:hover {
      background-color: #1ed760;
    }
  }
`;

let accessToken = null;
const params = new URLSearchParams(window.location.hash.substring(1));
if (params.has("access_token")) {
  accessToken = params.get("access_token");
}

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(accessToken !== null);

  const handleLogin = () => {
    const clientId = "6a86b6ac042844b5a04ef3e0e5d7b3da";
    const redirectUri = "http://localhost:3000/music";
    const scope = 'user-read-private user-read-email';

    const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(scope)}&show_dialog=true`;
    window.location.href = url;
  };

  return (
    <Container>
      {isLoggedIn ? (
        <MusicTrack/>
      ) : <LoginButton onClick={handleLogin}>LOG IN WITH SPOTIFY</LoginButton>}
    </Container>
  );
}

export { accessToken };
export default Login;
