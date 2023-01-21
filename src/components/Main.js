import React from 'react';
import Gallery from './Gallery';
import Description from './Description';
import { Container, Title } from './styles/Main.styled';

const Main = (props) => {


      if (props.image.id === 1) {
          return (
            <Container id={props.image.id}>
                <Title>Search though time</Title>
                <Gallery image={props.image}/>
            </Container>
          )
        } else if (props.image.id % 2 === 0) {
          return (
            <Container id={props.image.id} >
                <Description description={props.image.description} /> 
            </Container>
          )
        } else {
          return (
            <Container id={props.image.id}>
                <Gallery image={props.image}/>              
            </Container>
          )
        }  

}

export default Main