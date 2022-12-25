import React from 'react'
import styled from 'styled-components';

const TextContainer = styled.div`
    text-align: center;
    padding: 3rem 1rem;
    text-align: justify;

    h2 {
        letter-spacing: 6px;
        text-transform: uppercase;
        font-size: 1.3rem;
        text-align: center;
    }

    p {
        text-align: center;
        padding: 3rem 1rem;
        text-align: justify;
    }
`;

const TextBox = (props) => {
    return (
        <TextContainer>
            <h2>{props.title}</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloribus accusantium, quam odio
                repudiandae mollitia eos sapiente quo labore magnam, dignissimos praesentium blanditiis ratione error
                expedita, incidunt rerum corrupti modi enim commodi maxime veniam! Eius repellendus voluptates ducimus
                perspiciatis officiis adipisci quibusdam amet, officia omnis quas id minus ipsam, aliquam qui voluptas quo
                veritatis dolores vero magnam inventore sed numquam dignissimos a nisi. Tempore dolorem provident illo natus
                velit temporibus fugiat odio aperiam a sunt et harum autem sequi officiis quos distinctio quis nihil, modi
                eveniet commodi animi non accusantium! Nesciunt ut voluptatibus cumque et doloribus nihil impedit odio sed.
            </p>
        </TextContainer>
    )
}

export default TextBox
