import React from 'react';
import Gallery from './Gallery';
import Description from './Description';
import { Container, Title } from './styles/Main.styled';

const Main = (props) => {


      if (props.image.id === 1) {
          return (
            <Container id={props.image.id} style={{background: "rgb(32, 38, 57, 0.2)" , color: "white"}}>
                <Title>Search though time</Title>
                <Gallery image={props.image}/>
            </Container>
          )
        } else if (props.image.id % 2 === 0) {
          return (
            <Container id={props.image.id} style={{background: "transparent" , color: "white"}}>
                <Description description={props.image.description} /> 
            </Container>
          )
        } else {
          return (
            <Container id={props.image.id} style={{background: "rgb(32, 38, 57, 0.2)" , color: "white"}}>
                <Gallery image={props.image}/>              
            </Container>
          )
        }  

}

export default Main