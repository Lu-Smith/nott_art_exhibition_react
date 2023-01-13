import React from 'react';
import Control from './Control';
import Gallery from './Gallery';
import Description from './Description';
import { Container, Title } from './styles/Main.styled';


const Main = (props) => {

  if (props.image.id === 1) {
    return (
      <Container>
         <Title>Search though time</Title>
          <Gallery image={props.image}/>
          <Control id={props.image.id} />
          <Description description={props.image.description} />
      </Container>
    )
  } else {
    return (
      <Container>
          <Gallery image={props.image}/>
          <Control id={props.image.id} />
          <Description description={props.image.description} />
      </Container>
    )
  }

}

export default Main