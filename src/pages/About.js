import React, { memo } from 'react';
import ImageView from '../components/ImageView'
import TextBox from '../components/TextBox'

import Triangular from '../assets/img/geometric-triangular.jpg'
import Whale from '../assets/img/whale.jpg'
import Unsplash from '../assets/img/unsplash.jpg'

const view = [
    {title:"Rookie", img: Triangular, description: "Project: Rookie"},
    {title:"Made by HyunWook", img: Whale, description: "HyunWook_Go Presents"},
    {title:"SuperRookiee", img: Unsplash, description: "#SuperRookiee"}
];

const About = memo(() => {
    return (
        <div>
            {view.map((view, i) => {
                return ( 
                    <div key={i}>
                        <ImageView img={view.img} description={view.description}/>
                        <TextBox title={view.title} />
                    </div>
                );
            })}
        </div>
    );
});

export default About;