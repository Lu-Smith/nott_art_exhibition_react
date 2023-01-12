import React from 'react';
import Nott1 from '../images/The Warrior of Shattered Tears by Luna Smith.jpg';
import { Image, Title, Container } from './styles/Gallery.styled';

const Gallery = () => {
  return (
    <Container>
        <Image src={Nott1} alt='Nott1' />
        <Title> Nott1</Title>
    </Container>
  )
}

export default Gallery