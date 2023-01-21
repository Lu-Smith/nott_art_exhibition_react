import React from 'react';
import Gallery from './Gallery';
import Description from './Description';
import { Container, Title } from './styles/Main.styled';

const Main = (props) => {


      if (props.image.id === 1) {
          return (
            <Container id={props.image.id} style={{width: "100vw"}}>
                <Title>Search though time</Title>
                <Gallery image={props.image}/>
                <Description description={props.image.description} />
            </Container>
          )
        } else if (props.image.id % 2 === 0) {
          return (
            <Container id={props.image.id} style={{ width: "30vw"}} >
                <Description description={props.image.description} />
              
            </Container>
          )
        } else {
          return (
            <Container id={props.image.id} style={{width: "60vw"}}>
                <Gallery image={props.image}/>
                <Description description={props.image.description} />
              
            </Container>
          )
        }  




}

export default Main