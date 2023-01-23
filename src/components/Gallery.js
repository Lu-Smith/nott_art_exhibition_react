import React from 'react';
import { Image, Title, Container } from './styles/Gallery.styled';


const Gallery = (props) => {
  return (
    <Container>
        <Image src={props.image.src} alt={props.image.alt} />
        <div className='rectangle1'></div>
        <div className='rectangle2'></div>
        <div className='rectangle3'></div>
        <div className='rectangle4'></div>
        <div className='rectangle5'></div>
        <Title>{props.image.title}</Title>
    </Container>
  )
}

export default Gallery