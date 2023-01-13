import React from 'react';
import Control from './Control';
import Gallery from './Gallery';
import { Container, Description, Title } from './styles/Main.styled';


const Main = (props) => {
  return (
    <Container>
        <Title>Search though time</Title>
        <Gallery image={props.image}/>
        <Control image={props.image.id} />
        <Description>{props.image.description}</Description>
    </Container>
  )
}

export default Main