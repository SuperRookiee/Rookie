import React from 'react';
import ImageView from '../components/ImageView'
import TextBox from '../components/TextBox'

import Nasa from '../assets/img/nasa.jpg'
import Satellite from '../assets/img/satellite.jpeg'
import spaceStation from '../assets/img/spaceStation.jpeg'

const view = [
    {title:"Space", img: Nasa, description: "Project: Rookie"},
    {title:"Satellite", img: Satellite, description: "Satellite"},
    {title:"spaceStation", img: spaceStation, description: "spaceStation"}
];

const Seoul = () => {
    return (
        <div>
            {view.map((view, i) => {
                return ( 
                    <div>
                        <ImageView img={view.img} description={view.description} key={i}/>
                        <TextBox title={view.title} />
                    </div>
                );
            })}
        </div>
    );
};

export default Seoul;