import React from 'react';
import { Image, Title, Container } from './styles/Gallery.styled';


const Gallery = (props) => {
  return (
    <Container>
        <Image src={props.image.src} alt={props.image.alt} />
        <Title>{props.image.title}</Title>
    </Container>
  )
}

export default Gallery