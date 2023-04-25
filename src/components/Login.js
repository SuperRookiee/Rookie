import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  color: white;
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

const code = new URLSearchParams(window.location.search).get("code");

function Login() {
  const handleLogin = () => {
    const clientId = "6a86b6ac042844b5a04ef3e0e5d7b3da";
    const redirectUri = "http://localhost:3000/music";
    const scope = 'user-read-private user-read-email';

    const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(scope)}&show_dialog=true`;
    window.location.href = url;
  };

  return (

    <Container>
      <Title>Welcome to MusicSlice</Title>
      {code != null ? (
        <p>Login에 성공하였습니다.</p>
      ) : (
        <button onClick={handleLogin}>LOG IN WITH SPOTIFY</button>
      )}
    </Container>
  );
}

export default Login;
