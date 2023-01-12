import React from 'react';
import { Image, Title, Container } from './styles/Gallery.styled';
import content from '../helpers/imagesList';

const Gallery = () => {
  return (
    <Container>
        <Image src={content[0].src} alt={content[0].alt} />
        <Title>{content[0].title}</Title>
    </Container>
  )
}

export default Gallery