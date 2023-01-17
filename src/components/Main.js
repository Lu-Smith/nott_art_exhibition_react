import React from 'react';
import Gallery from './Gallery';
import Description from './Description';
import { Container, Title } from './styles/Main.styled';
import { useSelector } from 'react-redux'

const Main = (props) => {

  const slideChoice = useSelector((state) => state.slides.value);


  if (props.image.id < props.length) {
        if (slideChoice === props.image.id) {
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
  } else {
    return (
      <Container style={{width: "50vw"}}>
        Have a wonderful day
      </Container>
    )
    }

}

export default Main