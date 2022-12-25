import React from 'react';
import ImageView from '../components/ImageView'
import TextBox from '../components/TextBox'

import Gwanghwamun from '../assets/img/Seoul/gwanghwamun.jpg'
import Hanok from '../assets/img/Seoul/hanokVillage.jpg'
import Gangnam from '../assets/img/Seoul/gangnam.jpg'


const view = [
    {title:"Seoul", img: Gwanghwamun, description: "Seoul, the capital of Korea"},
    {title:"Hanok", img: Hanok, description: "Hanok"},
    {title:"Gangnam", img: Gangnam, description: "Gangnam"}
];


const Seoul = () => {
    return (
        <div>
            {view.map((view, i) => {
                return ( 
                    <div>
                        <ImageView img={view.img} description={view.description} key={i}/>
                        <TextBox title={view.title}/>
                    </div>
                );
            })}
        </div>
    );
};

export default Seoul;