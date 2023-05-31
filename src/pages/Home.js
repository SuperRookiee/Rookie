import React, { memo } from 'react';
import styled from 'styled-components';
import wallpaper from '../assets/img/wallpaper.jpg';
import mq from '../MediaQuery';

const HomeContainer = styled.div`
    background-image: url(${wallpaper});
    height: 100vh;
    div {
        font-size: 10rem;
        color: white;
        font-family: 'Shantell Sans', cursive !important;
        text-align: center;
        padding: 10%;

        ${mq.maxWidth('md')`
            font-size: 7rem;
            word-break: keep-all;
        `}

        p {
            margin: 30px;
            font-size: 30px;
        }
    }
`;

const Home = memo(() => {
    return (
        <HomeContainer>
            <div>
                React Project
                <p>
                    made by G.H.W
                </p>
            </div>
        </HomeContainer>
    );
});

export default Home;