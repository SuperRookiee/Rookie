import React, { useState } from 'react';
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
    color: #fff;
    background-color: #1db954;
    font-size: 14px;
    line-height: 1;
    border-radius: 500px;
    padding: 18px 48px 16px;
    transition-property: background-color;
    transition-duration: .3s;
    border-width: 0;
    letter-spacing: 2px;
    min-width: 160px;
    text-transform: uppercase;
    white-space: normal;
    cursor: pointer;

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

  if(accessToken)
    console.log(accessToken);

  return (
    <Container>
      {isLoggedIn ? (
        <SuccessMessage>
          <p>Login에 성공하였습니다.</p>
          {accessToken ? (`토큰값: `+accessToken) : '토큰값 없음'}
        </SuccessMessage>
      ) : <LoginButton onClick={handleLogin}>LOG IN WITH SPOTIFY</LoginButton>}
    </Container>
  );
}

export { accessToken };
export default Login;
