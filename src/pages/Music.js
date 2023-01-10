import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import m from '../assets/scss/Music.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth } from '../store/slices/MusicSlice';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';

import Login from './Login';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: #1db954;
    gap: 5rem;
    img {
        height: 20vh;
    }
    button {
        padding: 1rem 5rem;
        border-radius: 5rem;
        background-color: black;
        color: #49f585;
        border: none;
        font-size: 1.4rem;
        cursor: pointer;
    }
`;

const Music = memo(() => {
    const token = window.localStorage.getItem('token');
    // const code = new URLSearchParams(window.location.search).get("code");
    const { data, loading, error } = useSelector((state) => state.MusicSlice);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAuth());
  }, [dispatch]);

    return (
        <Container className={m.container}>
          <Spinner loading={loading} />
          {error ? (
                <ErrorView error={error} />
            ) : (
              <div>
                data: {data}
                <br />
                token: {token}
              </div>
            )}
        </Container>
    );
});

export default Music;