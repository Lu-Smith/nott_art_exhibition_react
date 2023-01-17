import React, {useRef} from 'react';
import Control from './Control';
import Gallery from './Gallery';
import Description from './Description';
import { Container, Title } from './styles/Main.styled';



const Main = (props) => {


  if (props.image.id === 1) {
    return (
      <Container id={props.image.name} >
        {props.image.id}
         <Title>Search though time</Title>
          <Gallery image={props.image}/>
          
          <Description description={props.image.description} />
      </Container>
    )
  } else if (props.image.title === "") {
    return (
      <Container id={props.image.name} >
        {props.image.id}
          <Description description={props.image.description} />
       
      </Container>
    )
  } else {
    return (
      <Container id={props.image.id} >
        {props.image.name}
          <Gallery image={props.image}/>
  
          <Description description={props.image.description} />
      </Container>
    )
  }

}

export default Main