import { Parallax } from 'react-parallax';
import styled from 'styled-components';
import '../assets/scss/responsive.scss';
import mq from '../MediaQuery';

const Content = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const Description = styled.span`
    background-color: rgba(3, 3, 3, 0.8);
    text-transform: uppercase;
    color: #fff;
    padding: 1rem;
    font-size: 1.5rem;
    letter-spacing: 10px;


    ${mq.maxWidth('md')`
        max-width: 80vw;
        font-size: 1rem;
        word-break: keep-all;
    `}
`;

const ImageOne = (props) => (
    <Parallax className='image' strength={300} bgImage={props.img} bgImageStyle={{minHeight:'100vh'}} blur={0} >
        <Content>
            <Description>
                {props.description}
            </Description>
        </Content>
    </Parallax>
);

export default ImageOne